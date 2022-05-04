import { FC, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import DiffModal from './DiffModal';
import Button from '@mui/material/Button';
import execTranslate from '../libs/deepl';
import diffText from '../libs/diffText';

type ButtonProps = {
  name: string;
};

const ExecButton: FC<ButtonProps> = ({ name }) => {
  const { sourceText, targetText, diffTexts, setDiffTexts } = useContext(GoodThingContext);

  const execDeepL = async () => {
    try {
      const { deeplText, status, errMsg } = await execTranslate(sourceText);
      if (deeplText) {
        setDiffTexts(diffText(targetText, deeplText));
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
        onClick={() => {
          execDeepL();
        }}
      >
        {name}
      </Button>
      {diffTexts.diffDeepLText && <DiffModal />}
    </div>
  );
};

export default ExecButton;
