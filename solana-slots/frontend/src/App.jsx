import React, { useState } from 'react';
import Header from './components/Header';
import SlotMachine from './components/SlotMachine';
import SlotControls from './components/SlotControls';
import Footer from './components/Footer';

// Using basic React state since we can't use zustand without npm
function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletBalance, setWalletBalance] = useState(100); // Mock SOL balance
  const [currentWager, setCurrentWager] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);
  
  // Mock function to simulate connecting a wallet
  const connectWallet = () => {
    setWalletConnected(true);
    setWalletBalance(100);
  };
  
  // Mock function to simulate disconnecting a wallet
  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletBalance(0);
  };
  
  // Mock function to simulate a spin
  const handleSpin = () => {
    if (!walletConnected || isSpinning || walletBalance < currentWager) {
      return;
    }
    
    setIsSpinning(true);
    setWalletBalance(prev => prev - currentWager);
    
    // Simulate a delay for the spin animation
    setTimeout(() => {
      // Mock win/loss logic (30% chance of winning)
      const isWin = Math.random() < 0.3;
      const winAmount = isWin ? currentWager * 2 : 0;
      
      setLastWin(winAmount);
      if (winAmount > 0) {
        setWalletBalance(prev => prev + winAmount);
      }
      
      setIsSpinning(false);
    }, 2000);
  };
  
  // Predefined wager options
  const wagerOptions = [1, 5, 10];

  return (
    <div className="flex flex-col min-h-screen bg-bg text-primary bg-no-repeat bg-cover bg-center md:bg-[url('/assets/backgrounds/desktop.png')] bg-[url('/assets/backgrounds/mobile.png')]">
      <Header
        walletConnected={walletConnected}
        walletBalance={walletBalance}
        onConnect={connectWallet}
        onDisconnect={disconnectWallet}
      />

      <main className="flex-1 container mx-auto py-6 px-4">
        {/* Vertical layout for all screen sizes */}
        <div className="flex flex-col items-center justify-center">
          <SlotMachine
            isSpinning={isSpinning}
            onSpin={handleSpin}
            currentWager={currentWager}
            setCurrentWager={setCurrentWager}
            wagerOptions={wagerOptions}
            walletConnected={walletConnected}
          />
          <SlotControls
            isSpinning={isSpinning}
            onSpin={handleSpin}
            currentWager={currentWager}
            setCurrentWager={setCurrentWager}
            wagerOptions={wagerOptions}
            lastWin={lastWin}
            walletConnected={walletConnected}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
