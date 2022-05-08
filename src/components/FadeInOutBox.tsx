// Ref: https://syakoo-lab.com/articles/20210529
import { CSSProperties, FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

type FadeInOutBoxProps = {
  children: ReactNode;
  display: boolean;
};

type DisplayState = 'DISPLAY' | 'HIDDEN';

const FadeInOutBox: FC<FadeInOutBoxProps> = ({ children, display }) => {
  const [displayState, setDisplayState] = useState<DisplayState>('HIDDEN');
  const boxRef = useRef<HTMLDivElement>(null);

  const style = useMemo((): CSSProperties => {
    if (!display || displayState === 'HIDDEN') {
      return {
        opacity: 0,
        transition: '0.3s',
      };
    }
    return {
      opacity: 1,
      transition: '0.3s',
    };
  }, [display, displayState]);

  useEffect(() => {
    if (display && displayState === 'HIDDEN') {
      setDisplayState('DISPLAY');
    }
    const onEvent = () => {
      if (!display && displayState === 'DISPLAY') {
        setDisplayState('HIDDEN');
      }
    };
    const box = boxRef.current;

    box?.addEventListener('transitionend', onEvent);
    return () => {
      box?.removeEventListener('transitionend', onEvent);
    };
  }, [display, displayState, boxRef]);

  return (
    <>
      {(display || displayState === 'DISPLAY') && (
        <div ref={boxRef} style={{ width: '100%', ...style }}>
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default FadeInOutBox;
