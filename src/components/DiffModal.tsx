import { useContext, useState } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import parser from 'html-react-parser';

const DiffModal = () => {
  const { diffTexts, setDiffTexts } = useContext(GoodThingContext);
  const [show, setShow] = useState<boolean>(true);

  const closeModal = () => {
    setShow(false);
    setDiffTexts({
      diffEnteredText: '',
      diffDeepLText: '',
    });
  };

  return (
    <div>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="z-10 w-4/5 px-6 pt-8 pb-4 bg-gray-100 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-row text-gray-800 leading-6">
              <div className="w-1/2 px-2">
                <p className="text-sm font-medium">Entered text</p>
                <p className="mt-2">{parser(diffTexts.diffEnteredText)}</p>
              </div>
              <div className="w-1/2 px-2">
                <p className="text-sm font-medium">Translated text</p>
                <p className="mt-2">{parser(diffTexts.diffDeepLText)}</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <IconButton size="small" onClick={() => closeModal()}>
                <HighlightOffOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiffModal;
