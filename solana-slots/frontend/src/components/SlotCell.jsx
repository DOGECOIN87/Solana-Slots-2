import React from 'react';

function SlotCell({ symbol, isSpinning }) {
  const style = {
    animation: isSpinning ? 'spin 0.1s linear infinite' : 'none'
  };

  return (
    <div className="bg-bg-alt rounded flex items-center justify-center aspect-square" style={style}>
      <img
        src={symbol.path}
        alt={symbol.name}
        className="w-full h-full object-contain p-2"
      />
    </div>
  );
}

export default SlotCell;
