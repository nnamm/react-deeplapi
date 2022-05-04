import diff from 'simple-text-diff';
import { DiffText } from '../contexts/GoodThingContext';

// export type DiffText = {
//   diffEnteredText: string;
//   diffDeepLText: string;
// };

const diffText = (enteredText: string, translatedText: string): DiffText => {
  const diffResult = diff.diffPatch(enteredText, translatedText);
  // const diffResult = diff.diffPatchBySeparator(enteredText, translatedText, '.');
  return {
    diffEnteredText: diffResult.before.replace(/\n/g, '<br>'),
    diffDeepLText: diffResult.after.replace(/\n/g, '<br>'),
  };
};

export default diffText;
