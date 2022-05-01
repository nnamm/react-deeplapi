import GoodThingProvider from '../contexts/GoodThingContext';
import TextArea from './TextArea';

const GoodThingContainer = () => {
  return (
    <div className="w-1/2">
      <GoodThingProvider>
        <TextArea name="Source" />
        <TextArea name="Target" />
      </GoodThingProvider>
    </div>
  );
};

export default GoodThingContainer;
