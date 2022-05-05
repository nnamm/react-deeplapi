import { useState } from 'react';
import GoodThingProvider from '../contexts/GoodThingContext';
import TextArea from './TextArea';
import ExecButton from './ExecButton';
import IconButton from '@mui/material/IconButton';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const GoodThingContainer = () => {
  const [targetShow, setTargetShow] = useState<boolean>(false);

  const targetHandlerShow = () => {
    setTargetShow(!targetShow);
  };

  return (
    <div className="w-1/2">
      <GoodThingProvider>
        <TextArea name="Source" />
        <div className="flex flex-row items-start mt-1">
          <IconButton size="small" onClick={() => targetHandlerShow()}>
            <ArrowRightOutlinedIcon />
          </IconButton>
          {targetShow && (
            <div className="flex flex-col w-full ml-2">
              <TextArea name="Target" />
              <ExecButton name="DeepL" />
            </div>
          )}
        </div>
      </GoodThingProvider>
    </div>
  );
};

export default GoodThingContainer;
