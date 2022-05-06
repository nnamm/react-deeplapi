import { useContext, useState } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import DiffModal from './DiffModal';
import IconButton from '@mui/material/IconButton';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import execTranslate from '../libs/deepl';
import diffText from '../libs/diffText';

const ExecButton = () => {
  const { sourceText, targetText, diffTexts, setDiffTexts } = useContext(GoodThingContext);
  const [translating, setTranslating] = useState<boolean>(false);

  const execDeepL = async () => {
    setTranslating(true);
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
      <IconButton
        aria-label="Check target text"
        disabled={sourceText === '' || targetText === '' || translating}
        sx={{ marginLeft: '.25rem' }}
        onClick={() => {
          execDeepL().then((res) => {
            setTranslating(false);
            if (res) setDiffTexts(diffText(targetText, res));
          });
        }}
      >
        <SpellcheckIcon sx={{ fontSize: '1.1rem' }} />
      </IconButton>

      {diffTexts.diffDeepLText && <DiffModal />}
    </div>
  );
};

export default ExecButton;
