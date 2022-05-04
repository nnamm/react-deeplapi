import { FC, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import Button from '@mui/material/Button';
import execTranslate from '../libs/deepl';

type ButtonProps = {
  name: string;
};

const ExecButton: FC<ButtonProps> = ({ name }) => {
  const { sourceText, targetText } = useContext(GoodThingContext);
  const execDeepL = async () => {
    try {
      const { translatedText, status, errMsg } = await execTranslate(sourceText);
      if (translatedText) {
        console.log(`Translated Text: ${translatedText}`);
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
