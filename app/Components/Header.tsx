import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
      <h1 className="text-2xl font-heading !text-yellow-200 bg-black/30 px-3 py-1 rounded drop-shadow-md inline-block">Welcome to My Frontend Journey</h1>
      <p className="mt-2 text-lg text-indigo-100">Powered by Next.js & Tailwind CSS 🚀</p>
    </header>
  );
};

export default Header;