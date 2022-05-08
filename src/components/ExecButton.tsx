import { useContext, useState } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import DiffModal from './DiffModal';
import IconButton from '@mui/material/IconButton';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import execTranslate from '../libs/deepl';
import diffText from '../libs/diffText';

const ExecButton = () => {
  const { sourceText, targetText, setDiffTexts, setShowModal } = useContext(GoodThingContext);
  const [translating, setTranslating] = useState<boolean>(false);

  const execDeepL = async () => {
    // disable icon button
    setTranslating(true);
    // cleanup diff data
    setDiffTexts({
      diffEnteredText: '',
      diffDeepLText: '',
    });

    // Translate
    try {
      const { deeplText, status, errMsg } = await execTranslate(sourceText);
      // Normal
      if (deeplText) return deeplText;
      // Error
      console.log(`DeepL failed: ${errMsg} / Status code: ${status}`);
    } catch (fetchErr) {
      // Error
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
            if (res) {
              // Create compared text data (html format)
              setDiffTexts(diffText(targetText, res));
              // Display them on modal screen
              setShowModal(true);
            }
          });
        }}
      >
        <SpellcheckIcon sx={{ fontSize: '1.1rem' }} />
      </IconButton>
      <DiffModal />
    </div>
  );
};

export default ExecButton;
