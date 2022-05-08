import { useState } from 'react';
import GoodThingProvider from '../contexts/GoodThingContext';
import FadeInOutBox from './FadeInOutBox';
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
        <div className="flex flex-row items-start mt-0.5">
          <IconButton aria-label="Open target textarea" onClick={() => targetHandlerShow()}>
            <ArrowRightOutlinedIcon />
          </IconButton>
          <FadeInOutBox display={targetShow}>
            <div className="flex flex-col mt-0.5 ml-0.5">
              <TextArea name="Target" />
              <ExecButton />
            </div>
          </FadeInOutBox>
        </div>
      </GoodThingProvider>
    </div>
  );
};

export default GoodThingContainer;
