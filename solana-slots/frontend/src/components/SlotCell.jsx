import React, { useEffect, useState } from 'react';

function SlotCell({ symbol, isSpinning }) {
  // Use a separate state for the animation to create a more realistic slot effect
  const [animationStyle, setAnimationStyle] = useState({});
  
  useEffect(() => {
    if (isSpinning) {
      // Create a vertical sliding animation instead of spinning
      setAnimationStyle({
        animation: `slotSpin 0.2s linear infinite`,
        transform: 'translateY(0)'
      });
    } else {
      // Stop the animation with a slight bounce effect
      setAnimationStyle({
        animation: 'none',
        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'translateY(0)'
      });
    }
  }, [isSpinning]);

  return (
    <div className="bg-bg-alt rounded overflow-hidden aspect-square shadow-inner relative">
      {/* Container with fixed height and overflow hidden */}
      <div 
        className="w-full h-full flex items-center justify-center"
        style={animationStyle}
      >
        <img
          src={symbol.path}
          alt={symbol.name}
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            console.error(`Failed to load image: ${symbol.path}`);
            e.target.src = '/assets/symbols/Wild.png'; // Fallback to Wild symbol
          }}
        />
      </div>
    </div>
  );
}

export default SlotCell;
