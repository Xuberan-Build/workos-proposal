import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            SSO Strategy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
