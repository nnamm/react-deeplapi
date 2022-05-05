import { useContext, useState } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import Button from '@mui/material/Button';
import parser from 'html-react-parser';

// Component
const DiffModal = () => {
  // Hooks
  const { diffTexts, setDiffTexts } = useContext(GoodThingContext);
  const [show, setShow] = useState(true);

  // Functions
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
          <div className="z-10 w-4/5 px-8 pt-8 pb-4 bg-gray-100 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex text-gray-800 leading-6">
              <div className="w-1/2 mr-4">
                <p className="text-sm">Entered text</p>
                <p className="mt-2">{parser(diffTexts.diffEnteredText)}</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm">Translated text</p>
                <p className="mt-2">{parser(diffTexts.diffDeepLText)}</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <Button className="focus:outline-none" style={{ textTransform: 'none' }} onClick={() => closeModal()}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiffModal;
