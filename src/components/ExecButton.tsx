import { FC, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import DiffModal from './DiffModal';
import Button from '@mui/material/Button';
import execTranslate from '../libs/deepl';
import diffText from '../libs/diffText';

// Definitions
type ButtonProps = {
  name: string;
};

// Component
const ExecButton: FC<ButtonProps> = ({ name }) => {
  // Hooks
  const { sourceText, targetText, diffTexts, setDiffTexts } = useContext(GoodThingContext);

  // Functions
  const execDeepL = async () => {
    try {
      const { deeplText, status, errMsg } = await execTranslate(sourceText);
      if (deeplText) {
        return deeplText;
      }
      console.log(`DeepL failed: ${errMsg} / Status code: ${status}`);
    } catch (fetchErr) {
      console.log(`Fetch failed: ${fetchErr}`);
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
          execDeepL().then((res) => {
            if (res) setDiffTexts(diffText(targetText, res));
          });
        }}
      >
        {name}
      </Button>
      {diffTexts.diffDeepLText && <DiffModal />}
    </div>
  );
};

export default ExecButton;
