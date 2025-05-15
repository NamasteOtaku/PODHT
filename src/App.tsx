import React from 'react';
import Header from './components/Header';
import PromptBuilder from './components/PromptBuilder';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="mt-8">
          <PromptBuilder />
        </main>
        <footer className="mt-12 pb-8 text-center text-gray-500 text-sm">
          <p>© 2025 Prompt-On-Demand. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;