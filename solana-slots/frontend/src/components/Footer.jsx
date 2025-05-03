import React from 'react';

function Footer() {
  return (
    <footer className="bg-bg-alt p-4 mt-auto border-t border-primary/20 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center gap-2 text-base text-gray-400 mb-3 md:mb-0">
          <img src="/assets/symbols/Mini-Slots.png" alt="Mini Slots" className="h-5 w-5" />
          &copy; {new Date().getFullYear()} Solana Slots | Provably Fair 5×3 Slots Game on Solana
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="text-primary hover:text-blue-400 hover:scale-105 transition-all duration-200 text-base flex items-center gap-1">
            <img src="/assets/symbols/Diamond.png" alt="Terms" className="h-4 w-4" />
            Terms
          </a>
          <a href="#" className="text-primary hover:text-blue-400 hover:scale-105 transition-all duration-200 text-base flex items-center gap-1">
            <img src="/assets/symbols/Ruby.png" alt="Privacy" className="h-4 w-4" />
            Privacy
          </a>
          <a href="#" className="text-primary hover:text-blue-400 hover:scale-105 transition-all duration-200 text-base flex items-center gap-1">
            <img src="/assets/symbols/Emerald.png" alt="Documentation" className="h-4 w-4" />
            Documentation
          </a>
          <a href="#" className="text-primary hover:text-blue-400 hover:scale-105 transition-all duration-200 text-base flex items-center gap-1">
            <img src="/assets/symbols/Sapphire.png" alt="GitHub" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
