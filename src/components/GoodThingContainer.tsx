import GoodThingProvider from '../contexts/GoodThingContext';
import TextArea from './TextArea';
import ExecButton from './ExecButton';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const GoodThingContainer = () => {
  return (
    <div className="w-1/2">
      <GoodThingProvider>
        <TextArea name="Source" />
        <div className="flex flex-row items-start mt-2">
          <IconButton size="small">
            <ArrowDropDownIcon />
          </IconButton>
          <div className="flex flex-col w-full ml-2">
            <TextArea name="Target" />
            <ExecButton name="DeepL" />
          </div>
        </div>
      </GoodThingProvider>
    </div>
  );
};

export default GoodThingContainer;
