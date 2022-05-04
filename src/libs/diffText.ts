import diff from 'simple-text-diff';
import { DiffText } from '../contexts/GoodThingContext';

const diffText = (enteredText: string, translatedText: string): DiffText => {
  const diffResult = diff.diffPatch(enteredText, translatedText);

  return {
    diffEnteredText: diffResult.before.replace(/\n/g, '<br>'),
    diffDeepLText: diffResult.after.replace(/\n/g, '<br>'),
  };
};

export default diffText;
