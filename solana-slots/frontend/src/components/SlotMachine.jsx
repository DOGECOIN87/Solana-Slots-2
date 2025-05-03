import React, { useState, useEffect } from 'react';
import SlotCell from './SlotCell';

// Complete list of all available game symbols
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
  { id: 'bonus-open', name: 'Bonus Open', value: 15, path: '/assets/symbols/Bonus-Open-Full.png' },
  { id: 'free-spin', name: 'Free Spin', value: 0, path: '/assets/symbols/Free-Spin.png' },
  { id: '2x', name: '2X Multiplier', value: 2, path: '/assets/symbols/2X.png' },
  { id: '5x', name: '5X Multiplier', value: 5, path: '/assets/symbols/5X.png' },
  { id: 'empty-bag', name: 'Empty Bag', value: 0, path: '/assets/symbols/Empty-Bag.png' },
  { id: 'full-bag', name: 'Full Bag', value: 8, path: '/assets/symbols/Full-Bag.png' },
  { id: 'gold-token', name: 'Gold Token', value: 3, path: '/assets/symbols/Gold-Token.png' },
  { id: 'gold-tokens', name: 'Gold Tokens', value: 6, path: '/assets/symbols/Gold-Tokens.png' },
  { id: 'mini-slots', name: 'Mini Slots', value: 12, path: '/assets/symbols/Mini-Slots.png' },
  { id: 'rocket', name: 'Rocket', value: 15, path: '/assets/symbols/Rocket.png' },
  { id: 'usd-coin', name: 'USD Coin', value: 5, path: '/assets/symbols/USD-Coin.png' },
  { id: 'wallet', name: 'Wallet', value: 4, path: '/assets/symbols/Wallet.png' }
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
    <div className="flex flex-col items-center w-full"> 
      {/* Paytable display - moved to top */}
      <div className="mb-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 w-full max-w-4xl mx-auto bg-bg-alt p-3 rounded-lg shadow-md border border-primary/20">
        {SYMBOLS.slice(0, 8).map(symbol => (
          <div key={symbol.id} className="flex flex-col items-center gap-1 text-xs">
            <img src={symbol.path} alt={symbol.name} className="w-8 h-8 object-contain" />
            <span className="text-primary">{symbol.value}x</span>
          </div>
        ))}
      </div>
      
      {/* Slot machine container */}
      <div className="p-6 rounded-lg bg-bg-alt shadow-lg w-full border border-primary/20"> 
        {/* Grid for the slot cells */}
        <div className="grid grid-cols-5 gap-3 w-full max-w-4xl mx-auto"> 
          {grid.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((symbol, colIndex) => (
                <SlotCell
                  key={`${rowIndex}-${colIndex}`}
                  symbol={symbol}
                  isSpinning={isSpinning}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlotMachine;
