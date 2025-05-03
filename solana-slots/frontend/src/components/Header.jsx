import React from 'react';

function Header({ walletConnected, walletBalance, onConnect, onDisconnect }) {
  return (
    <header className="bg-bg-alt px-4 py-4 shadow-lg border-b border-primary/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/assets/symbols/777.png" alt="Logo" className="h-8 w-8" />
          <div className="font-bold text-2xl bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            Solana Slots
          </div>
        </div>

        <div className="flex items-center gap-4">
          {walletConnected ? (
            <>
              <div className="flex items-center gap-2 bg-bg p-2 rounded-md border border-yellow/30">
                <img src="/assets/symbols/Wallet.png" alt="Wallet" className="h-6 w-6" />
                <span className="text-yellow text-lg font-semibold">{walletBalance.toFixed(2)} SOL</span>
                <img src="/assets/symbols/Gold-Token.png" alt="Token" className="h-5 w-5 ml-1" />
              </div>
              <button
                className="px-4 py-2 rounded-md font-bold transition-all duration-200 bg-primary text-bg hover:bg-blue-400 hover:scale-105 active:scale-95 flex items-center gap-2"
                onClick={onDisconnect}
              >
                <img src="/assets/symbols/Empty-Bag.png" alt="Disconnect" className="h-5 w-5" />
                Disconnect
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 rounded-md font-bold transition-all duration-200 bg-primary text-bg hover:bg-blue-400 hover:scale-105 active:scale-95 flex items-center gap-2"
              onClick={onConnect}
            >
              <img src="/assets/symbols/Full-Bag.png" alt="Connect" className="h-5 w-5" />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
