import GoodThingProvider from '../contexts/GoodThingContext';
import TextArea from './TextArea';
import ExecButton from './ExecButton';

const GoodThingContainer = () => {
  return (
    <div className="w-1/2">
      <GoodThingProvider>
        <TextArea name="Source" />
        <TextArea name="Target" />
        <ExecButton name="DeepL" />
      </GoodThingProvider>
    </div>
  );
};

export default GoodThingContainer;
