import React, { useState, useEffect } from 'react';
import SlotCell from './SlotCell';

// This would normally come from our assets, but for now we mock the symbols
const SYMBOLS = [
  { id: 'diamond', name: 'Diamond', value: 5, path: '/assets/symbols/Diamond.png' },
  { id: 'ruby', name: 'Ruby', value: 4, path: '/assets/symbols/Ruby.png' },
  { id: 'emerald', name: 'Emerald', value: 3, path: '/assets/symbols/Emerald.png' },
  { id: 'sapphire', name: 'Sapphire', value: 2, path: '/assets/symbols/Sapphire.png' },
  { id: 'quartz', name: 'Quartz', value: 1, path: '/assets/symbols/Quartz.png' },
  { id: 'wild', name: 'Wild', value: 10, path: '/assets/symbols/Wild.png' },
  { id: '777', name: '777', value: 7, path: '/assets/symbols/777.png' },
  { id: '7', name: '7', value: 3, path: '/assets/symbols/7.png' },
  { id: 'jackpot', name: 'Jackpot', value: 20, path: '/assets/symbols/Jackpot.png' },
  { id: 'bonus', name: 'Bonus', value: 15, path: '/assets/symbols/Bonus.png' },
  { id: 'free-spin', name: 'Free Spin', value: 0, path: '/assets/symbols/Free-Spin.png' }
];

function SlotMachine({ 
  isSpinning, 
  onSpin, 
  currentWager, 
  setCurrentWager, 
  wagerOptions, 
  lastWin,
  walletConnected
}) {
  // State to track the current symbols in each cell
  const [grid, setGrid] = useState([]);
  
  // Initialize the grid with random symbols on first render
  useEffect(() => {
    // Create a 5x3 grid of random symbols
    const initialGrid = Array(3).fill().map(() => 
      Array(5).fill().map(() => getRandomSymbol())
    );
    setGrid(initialGrid);
  }, []);
  
  // Update the grid with new random symbols when spinning
  useEffect(() => {
    if (isSpinning) {
      const spinInterval = setInterval(() => {
        // Update grid with random symbols during spin animation
        setGrid(prevGrid => 
          prevGrid.map(row => 
            row.map(() => getRandomSymbol())
          )
        );
      }, 100);
      
      return () => clearInterval(spinInterval);
    }
  }, [isSpinning]);
  
  // Helper function to get a random symbol
  function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * SYMBOLS.length);
    return SYMBOLS[randomIndex];
  }
  
  return (
    // Removed fixed max-width, added padding and subtle background for framing
    <div className="flex flex-col items-center p-4 rounded-lg bg-bg-alt shadow-md w-full"> 
      {/* Grid for the slot cells */}
      <div className="grid grid-cols-5 gap-2 w-full"> 
        {grid.map((row, rowIndex) => (
          row.map((symbol, colIndex) => (
            <SlotCell
              key={`${rowIndex}-${colIndex}`}
              symbol={symbol}
              isSpinning={isSpinning}
            />
          ))
        ))}
      </div>
    </div>
  );
}

export default SlotMachine;
