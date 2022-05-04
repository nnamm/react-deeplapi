import diff from 'simple-text-diff';

type DiffText = {
  textByMyself: string;
  textByDeepL: string;
};

const diffText = (enteredText: string, translatedText: string): DiffText => {
  const diffResult = diff.diffPatch(enteredText, translatedText);
  return {
    textByMyself: diffResult.before.replace(/\n/g, '<br>'),
    textByDeepL: diffResult.after.replace(/\n/g, '<br>'),
  };
};

export default diffText;
