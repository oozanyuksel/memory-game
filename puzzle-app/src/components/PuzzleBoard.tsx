/* eslint-disable */
import React, { useState } from 'react';
import PuzzleCard from './PuzzleCard';

const numbers = Array.from(Array(8).keys());

interface SelectedCard {
  value: number;
  setOpen: (b: boolean) => void;
}

const getRandomCardValues = (pairCount: number) => {
  const nums = Array.from(Array(pairCount).keys());
  return [...nums, ...nums].sort(() => Math.random() - 0.5);
};

const PuzzleBoard: React.FC<{}> = () => {
  const [solvedNumbers, setSolvedNumbers] = useState<number[]>([]);
  const [randomNumbers] = useState<number[]>(getRandomCardValues(8));
  const [selected, setSelected] = useState<SelectedCard[]>([]);
  const _onClick = (value: number, isSolvedOrOpen: boolean, setOpen: (b: boolean) => void) => {
    if(selected.length > 1){
      selected.forEach(s => {s.setOpen(false);});
      setSelected([]);
      return;
      }
    if(isSolvedOrOpen) {
      return;
    }
    setOpen(true);
    if(selected.length === 1 && selected[0].value === value) {
        setSolvedNumbers([...solvedNumbers, value]);
        setSelected([]);
        return;
      }
    setSelected([...selected, {value, setOpen}]);
    setOpen(true);
  };
  return (
    <div
      style={{
        backgroundImage: "url('https://thinknowhome.files.wordpress.com/2018/12/dpfb-ptx4aae5hu.jpg?w=1920&h=768&crop=1')",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        marginLeft: '10%',
        marginRight: '10%',
        width: '80%',
        paddingTop: '40%',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {randomNumbers.map((num, i) => (
          <PuzzleCard key={`card-${i}`} value={num} isSolved={solvedNumbers.includes(num)} onClick={_onClick} />
        ))}
      </div>
    </div>
  );
};

export default PuzzleBoard;
