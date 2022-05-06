import React, { FC, useContext, useEffect, useRef } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import appConfig from '../config';

type TextAreaProps = {
  name: string;
};

const useAutoHeightTextarea = (value: string | undefined): React.RefObject<HTMLTextAreaElement> => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check max number of line (<= 10 lines)
    if (element.scrollHeight <= appConfig.app.textAreaMaxHeight) {
      const { borderTopWidth, borderBottomWidth } = getComputedStyle(element);
      element.style.height = 'auto';
      element.style.height = `calc(${element.scrollHeight}px + ${borderTopWidth} + ${borderBottomWidth})`;
    }
  }, [value]);

  return ref;
};

const TextArea: FC<TextAreaProps> = ({ name }) => {
  const { sourceText, targetText, setSourceText, setTargetText } = useContext(GoodThingContext);
  const sourceTextareaRef = useAutoHeightTextarea(sourceText);
  const targetTextareaRef = useAutoHeightTextarea(targetText);

  const sourceHandlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSourceText(e.target.value);
  };

  const targetHandlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTargetText(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full px-2 py-1 leading-6 border-solid rounded-lg bg-gray-100 focus:outline-none focus:bg-white"
        style={{ border: 'solid 1px #ddd', resize: 'none' }}
        aria-label="Textarea to write about what was good."
        id={name}
        name={name}
        placeholder={name}
        rows={1}
        onChange={name === 'Source' ? (e) => sourceHandlerChange(e) : (e) => targetHandlerChange(e)}
        ref={name === 'Source' ? sourceTextareaRef : targetTextareaRef}
        value={name === 'Source' ? sourceText : targetText}
      />
    </div>
  );
};

export default TextArea;
