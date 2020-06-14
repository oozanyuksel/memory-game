import React, { useState } from 'react';

export interface PuzzleCardProps {
  key: string;
  value: number;
  isSolved: boolean;
  onClick: (value: number, isSolvedOrOpen: boolean, setOpen: (b: boolean) => void) => void;
}

const PuzzleCard: React.FC<PuzzleCardProps> = ({ key, value, isSolved, onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        width: '25%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isSolved ? 0 : '100%',
        backgroundColor: open ? 'green' : 'red',
        cursor: 'pointer',
      }}
      className="puzzle-card"
      key={key}
      onClick={() => onClick(value, isSolved || open, setOpen)}
    >
      {open ? value : 'CLOSED'}
    </div>
  );
};

export default PuzzleCard;
