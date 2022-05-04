import { FC, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import Button from '@mui/material/Button';
import execTranslate from '../libs/deepl';
import diffText from '../libs/diffText';

type ButtonProps = {
  name: string;
};

const ExecButton: FC<ButtonProps> = ({ name }) => {
  const { sourceText, targetText } = useContext(GoodThingContext);
  const execDeepL = async () => {
    try {
      const { translatedText, status, errMsg } = await execTranslate(sourceText);
      if (translatedText) {
        const diff = diffText(targetText, translatedText);
        console.log(`Translated Text: ${translatedText}`);
        console.log(`Enterd text by myself: ${diff.textByMyself}`);
        console.log(`Translated text by DeepL: ${diff.textByDeepL}`);
      } else {
        console.log(`DeepL faild: ${errMsg} / Status code: ${status}`);
      }
    } catch (fetchErr) {
      console.log(`Fetch faild: ${fetchErr}`);
    }
  };

  return (
    <div>
      <Button
        className="focus:outline-none"
        disabled={sourceText === '' || targetText === ''}
        size="small"
        style={{ textTransform: 'none' }}
        onClick={() => execDeepL()}
      >
        {name}
      </Button>
    </div>
  );
};

export default ExecButton;
