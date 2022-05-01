import { FC, useState, createContext, ReactNode } from 'react';

type GoodThingContextType = {
  goodThingNumber?: number;
  date?: string;
  sourceText: string;
  targetText: string;
  setSourceText: (sourceText: string) => void;
  setTargetText: (targetText: string) => void;
};

type Props = {
  children: ReactNode;
};

export const GoodThingContext = createContext<GoodThingContextType>({
  sourceText: '',
  targetText: '',
  setSourceText: () => ({}),
  setTargetText: () => ({}),
});

const GoodThingProvider: FC<Props> = (props) => {
  const { children } = props;
  const [sourceText, setSourceText] = useState<string>('');
  const [targetText, setTargetText] = useState<string>('');
  const value = { sourceText, targetText, setSourceText, setTargetText };

  return <GoodThingContext.Provider value={value}>{children}</GoodThingContext.Provider>;
};

export default GoodThingProvider;
