import React from 'react';

function SlotControls({
  isSpinning,
  onSpin,
  currentWager,
  setCurrentWager,
  wagerOptions,
  lastWin,
  walletConnected
}) {
  // Design guide recommends larger touch targets (~44px+) and prominent Spin button (60-80px)
  // Using 8px grid for spacing (gap-4 = 1rem = 16px)
  return (
    <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs md:max-w-sm"> 
      {/* Win Display */}
      <div className="h-8"> {/* Reserve space for win display */}
        {lastWin > 0 && (
          <div className="text-green text-2xl font-bold animate-pulse"> {/* Larger font, pulse animation */}
            + {lastWin.toFixed(2)} SOL
          </div>
        )}
      </div>

      {/* Wager Controls */}
      <div className="flex items-center justify-center gap-2 w-full">
        <span className="text-primary text-lg mr-2">Wager:</span>
        {wagerOptions.map(option => (
          <button
            key={option}
            className={`px-4 py-2 rounded-md border border-primary text-primary text-lg font-medium hover:bg-primary hover:text-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${currentWager === option ? 'bg-primary text-bg' : ''}`} // Increased padding/size
            onClick={() => setCurrentWager(option)}
            disabled={isSpinning}
            style={{ minWidth: '44px', minHeight: '44px' }} // Ensure minimum touch target size
          >
            {option}
          </button>
        ))}
      </div>

      {/* Spin Button */}
      <button
        className="bg-green text-bg text-2xl px-6 py-6 rounded-full font-bold hover:bg-emerald-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg w-20 h-20 flex items-center justify-center" // Larger, circular, more prominent
        onClick={onSpin}
        disabled={isSpinning || !walletConnected}
        aria-label="Spin the slots"
      >
        {isSpinning ? (
          <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : 'SPIN'}
      </button>

      {/* Wallet Connection Prompt */}
      {!walletConnected && (
        <div className="mt-4 text-center text-yellow text-lg"> {/* Slightly larger text */}
          Connect your wallet to play!
        </div>
      )}
    </div>
  );
}

export default SlotControls;
