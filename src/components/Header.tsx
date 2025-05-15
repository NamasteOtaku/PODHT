import React from 'react';
import { Wand2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="pt-6">
      <div className="flex items-center justify-center mb-2">
        <Wand2 className="h-10 w-10 text-indigo-600 mr-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Prompt-On-Demand
        </h1>
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Create optimized, token-efficient prompts for text-to-app AI systems by filling out the form below.
      </p>
    </header>
  );
};

export default Header;