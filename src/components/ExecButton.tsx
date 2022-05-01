import { FC, useContext } from 'react';
import { GoodThingContext } from '../contexts/GoodThingContext';
import Button from '@mui/material/Button';

type ButtonProps = {
  name: string;
};

const ExecButton: FC<ButtonProps> = ({ name }) => {
  const { sourceText, targetText } = useContext(GoodThingContext);

  return (
    <div>
      <Button className="focus:outline-none" disabled={targetText.length === 0} size="small" style={{ textTransform: 'none' }}>
        {name}
      </Button>
    </div>
  );
};

export default ExecButton;
