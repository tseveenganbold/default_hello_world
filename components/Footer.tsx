import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          Powered by <span className="font-semibold text-slate-800">React</span> + <span className="font-semibold text-slate-800">Tailwind</span> + <span className="font-semibold text-indigo-600">Google Gemini</span>
        </p>
      </div>
    </footer>
  );
};