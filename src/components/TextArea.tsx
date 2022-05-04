import React, { FC, useState, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';

const INITROW = 1;

type TextAreaProps = {
  name: string;
};

const getRowCount = (text: string): number => {
  const matchArray: RegExpMatchArray | null = text.match(/\n/g);
  if (matchArray) {
    const lineBreaks = matchArray.length + INITROW;
    return lineBreaks < 10 ? lineBreaks : 10;
  }
  return INITROW;
};

const TextArea: FC<TextAreaProps> = ({ name }) => {
  const [rowCount, setRowCount] = useState(INITROW);
  const { sourceText, targetText, setSourceText, setTargetText } = useContext(GoodThingContext);

  const sourceHandlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRowCount(getRowCount(e.target.value));
    setSourceText(e.target.value);
  };
  const targetHandlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRowCount(getRowCount(e.target.value));
    setTargetText(e.target.value);
  };

  return (
    <div>
      <div className="text-gray-400 text-sm">
        {name === 'Source' ? <label htmlFor={name}>{name}</label> : <label htmlFor="Target">{name}</label>}
      </div>
      <textarea
        aria-label="Textarea to write about what was good."
        id={name}
        name={name}
        rows={rowCount}
        value={name === 'Source' ? sourceText : targetText}
        onChange={name === 'Source' ? (e) => sourceHandlerChange(e) : (e) => targetHandlerChange(e)}
        className="w-full px-2 py-1 leading-6 border-solid rounded-lg bg-gray-100 focus:outline-none focus:bg-white"
        style={{ border: 'solid 1px #ddd', resize: 'none' }}
      />
    </div>
  );
};

export default TextArea;
