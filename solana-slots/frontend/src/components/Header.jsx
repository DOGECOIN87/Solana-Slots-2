import React from 'react';

function Header({ walletConnected, walletBalance, onConnect, onDisconnect }) {
  // Adjusted padding for better height (py-3 = 12px, total height depends on content)
  // Increased balance font size and weight
  return (
    <header className="bg-bg-alt px-4 py-3 shadow-md"> {/* Added shadow */}
      <div className="container mx-auto flex justify-between items-center"> {/* Added mx-auto */}
        <div className="font-bold text-2xl">Solana Slots</div>

        <div className="flex items-center gap-4">
          {walletConnected ? (
            <>
              <div className="flex items-center gap-2">
                <img src="/assets/symbols/Wallet.png" alt="Wallet" className="h-6 w-6" />
                <span className="text-yellow text-lg font-semibold">{walletBalance.toFixed(2)} SOL</span> {/* Increased size/weight */}
              </div>
              <button
                className="px-4 py-2 rounded font-bold transition-colors duration-200 bg-primary text-bg hover:bg-blue-400" // Keep button style for now
                onClick={onDisconnect}
              >
                Disconnect Wallet
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 rounded font-bold transition-colors duration-200 bg-primary text-bg hover:bg-blue-400"
                onClick={onConnect}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
