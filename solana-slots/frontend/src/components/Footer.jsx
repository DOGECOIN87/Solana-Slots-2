import React from 'react';

function Footer() {
  // Increased font size from text-sm to text-base for better readability
  return (
    <footer className="bg-bg-alt p-4 mt-auto"> {/* Keep padding as is for now */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left"> {/* Added mx-auto */}
        <div className="text-base text-gray-400 mb-2 md:mb-0"> {/* Increased size */}
          &copy; {new Date().getFullYear()} Solana Slots | Provably Fair 5×3 Slots Game on Solana
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-primary hover:text-blue-400 text-base">Terms</a> {/* Increased size */}
          <a href="#" className="text-primary hover:text-blue-400 text-base">Privacy</a> {/* Increased size */}
          <a href="#" className="text-primary hover:text-blue-400 text-base">Documentation</a> {/* Increased size */}
          <a href="#" className="text-primary hover:text-blue-400 text-base">GitHub</a> {/* Increased size */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
