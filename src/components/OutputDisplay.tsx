import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface OutputDisplayProps {
  prompt: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-700 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">FINAL APP PROMPT</h2>
        <button
          onClick={handleCopy}
          className="inline-flex items-center p-2 rounded-md bg-indigo-600 hover:bg-indigo-800 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </button>
      </div>
      <div className="p-4 bg-gray-50">
        <pre className="whitespace-pre-wrap text-sm font-mono bg-white border border-gray-200 rounded p-4 max-h-96 overflow-y-auto">
          {prompt}
        </pre>
      </div>
      <div className="p-4 bg-indigo-50 text-sm text-gray-700">
        <p className="font-medium mb-1">Ready to use with any text-to-app AI!</p>
        <p>This prompt has been optimized to stay under 500 tokens while preserving all important details.</p>
      </div>
    </div>
  );
};

export default OutputDisplay;