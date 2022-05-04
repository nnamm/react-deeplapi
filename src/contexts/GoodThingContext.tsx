import { FC, useState, createContext, ReactNode } from 'react';

export type DiffText = {
  diffEnteredText: string;
  diffDeepLText: string;
};

type GoodThingContextType = {
  goodThingNumber?: number;
  date?: string;
  sourceText: string;
  targetText: string;
  diffTexts: DiffText;
  setSourceText: (sourceText: string) => void;
  setTargetText: (targetText: string) => void;
  setDiffTexts: (diffTexts: DiffText) => void;
};

type Props = {
  children: ReactNode;
};

export const GoodThingContext = createContext<GoodThingContextType>({
  sourceText: '',
  targetText: '',
  diffTexts: {
    diffEnteredText: '',
    diffDeepLText: '',
  },
  setSourceText: () => ({}),
  setTargetText: () => ({}),
  setDiffTexts: () => ({}),
});

const GoodThingProvider: FC<Props> = (props) => {
  const { children } = props;
  const [sourceText, setSourceText] = useState<string>('');
  const [targetText, setTargetText] = useState<string>('');
  const [diffTexts, setDiffTexts] = useState<DiffText>({
    diffEnteredText: '',
    diffDeepLText: '',
  });
  const value = {
    sourceText,
    targetText,
    diffTexts,
    setSourceText,
    setTargetText,
    setDiffTexts,
  };

  return <GoodThingContext.Provider value={value}>{children}</GoodThingContext.Provider>;
};

export default GoodThingProvider;
