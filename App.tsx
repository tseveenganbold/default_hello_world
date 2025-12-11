import React from 'react';
import { HelloWorld } from './components/HelloWorld';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <HelloWorld />
      </main>
      <Footer />
    </div>
  );
};

export default App;