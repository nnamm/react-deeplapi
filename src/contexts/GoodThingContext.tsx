import { createContext, FC, ReactNode, useState } from 'react';

export type DiffText = {
  diffEnteredText: string;
  diffDeepLText: string;
};

type GoodThingContextType = {
  // goodThingNumber?: number;
  // date?: string;
  sourceText: string;
  targetText: string;
  diffTexts: DiffText;
  showModal: boolean;
  setSourceText: (sourceText: string) => void;
  setTargetText: (targetText: string) => void;
  setDiffTexts: (diffTexts: DiffText) => void;
  setShowModal: (showModal: boolean) => void;
};

type ContextProps = {
  children: ReactNode;
};

export const GoodThingContext = createContext<GoodThingContextType>({
  sourceText: '',
  targetText: '',
  diffTexts: {
    diffEnteredText: '',
    diffDeepLText: '',
  },
  showModal: false,
  setSourceText: () => ({}),
  setTargetText: () => ({}),
  setDiffTexts: () => ({}),
  setShowModal: () => ({}),
});

const GoodThingProvider: FC<ContextProps> = (props) => {
  const { children } = props;
  const [sourceText, setSourceText] = useState<string>('');
  const [targetText, setTargetText] = useState<string>('');
  const [diffTexts, setDiffTexts] = useState<DiffText>({
    diffEnteredText: '',
    diffDeepLText: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const value = {
    sourceText,
    targetText,
    diffTexts,
    showModal,
    setSourceText,
    setTargetText,
    setDiffTexts,
    setShowModal,
  };

  return <GoodThingContext.Provider value={value}>{children}</GoodThingContext.Provider>;
};

export default GoodThingProvider;
