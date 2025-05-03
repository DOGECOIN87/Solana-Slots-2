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
  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      {/* Win Display - positioned at the top */}
      <div className="h-16 flex items-center justify-center mb-4">
        {lastWin > 0 ? (
          <div className="flex items-center gap-2 text-green text-3xl font-bold animate-pulse bg-bg p-3 rounded-lg shadow-md border border-green/30">
            <img src="/assets/symbols/Gold-Token.png" alt="Coins" className="w-10 h-10" />
            + {lastWin.toFixed(2)} SOL
          </div>
        ) : null}
      </div>
      
      {/* Controls Container - horizontal layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-bg-alt p-4 rounded-lg shadow-lg border border-primary/20">
        {/* Wager Controls - left side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/symbols/USD-Coin.png" alt="Wager" className="w-8 h-8" />
            <span className="text-primary text-lg font-medium">Wager:</span>
          </div>
          
          <div className="flex items-center gap-2">
            {wagerOptions.map(option => (
              <button
                key={option}
                className={`px-4 py-2 rounded-md border-2 border-primary text-primary text-lg font-bold hover:bg-primary hover:text-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${currentWager === option ? 'bg-primary text-bg' : ''}`}
                onClick={() => setCurrentWager(option)}
                disabled={isSpinning}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {/* Spin Button - center/right side */}
        <button
          className="bg-green text-bg text-2xl px-6 py-6 rounded-full font-bold hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg w-28 h-28 flex items-center justify-center"
          onClick={onSpin}
          disabled={isSpinning || !walletConnected}
          aria-label="Spin the slots"
        >
          {isSpinning ? (
            <svg className="animate-spin h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <img src="/assets/symbols/Rocket.png" alt="Rocket" className="w-10 h-10 absolute opacity-50" />
              <span>SPIN</span>
            </>
          )}
        </button>
      </div>
      
      {/* Wallet Connection Prompt */}
      {!walletConnected && (
        <div className="mt-4 text-center text-yellow text-lg font-medium p-3 bg-bg rounded-md border border-yellow/30 max-w-md mx-auto">
          <div className="flex items-center gap-2 justify-center">
            <img src="/assets/symbols/Wallet.png" alt="Wallet" className="w-6 h-6" />
            Connect your wallet to play!
          </div>
        </div>
      )}
    </div>
  );
}

export default SlotControls;
