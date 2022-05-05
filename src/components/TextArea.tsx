import React, { FC, useContext, useState } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';

// Definitions
type TextAreaProps = {
  name: string;
};
const INITROW = 1;

// Component
const TextArea: FC<TextAreaProps> = ({ name }) => {
  // Hooks
  const [rowCount, setRowCount] = useState(INITROW);
  const { sourceText, targetText, setSourceText, setTargetText } = useContext(GoodThingContext);

  // Functions
  const getRowCount = (text: string): number => {
    const matchArray: RegExpMatchArray | null = text.match(/\n/g);
    if (matchArray) {
      const lineBreaks = matchArray.length + INITROW;
      return lineBreaks < 10 ? lineBreaks : 10;
    }
    return INITROW;
  };
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
