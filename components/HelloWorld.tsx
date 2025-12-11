import React, { useState, useEffect, useCallback } from 'react';
import { fetchCreativeGreeting } from '../services/geminiService';
import { Sparkles, RefreshCw, Terminal } from 'lucide-react';

export const HelloWorld: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadGreeting = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const message = await fetchCreativeGreeting();
      setGreeting(message);
    } catch (err) {
      setError("Failed to load greeting.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGreeting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transform transition-all hover:shadow-2xl">
      <div className="bg-indigo-600 p-6 flex items-center justify-between">
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <Terminal size={24} className="text-indigo-200" />
          System Status
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/50 rounded-full text-xs font-medium text-white ring-1 ring-inset ring-white/20">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Online
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 text-center">
          Hello, World!
        </h1>

        <div className="bg-slate-50 rounded-xl p-6 mb-8 min-h-[120px] flex items-center justify-center border border-slate-100 relative group">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              <p className="text-sm text-slate-400 font-medium">Consulting Gemini...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 font-medium">{error}</p>
          ) : (
            <p className="text-lg text-slate-700 text-center font-medium leading-relaxed">
              "{greeting}"
            </p>
          )}
          
          {!isLoading && !error && (
             <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="text-yellow-400 w-5 h-5" />
             </div>
          )}
        </div>

        <button
          onClick={loadGreeting}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          <RefreshCw size={18} className={`transition-transform ${isLoading ? 'animate-spin' : 'group-hover:rotate-180'}`} />
          Generate New Greeting
        </button>
      </div>
    </div>
  );
};