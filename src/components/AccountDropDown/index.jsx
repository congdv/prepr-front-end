import React, { useState } from 'react';

const AccountDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (event) => {
    if (event.key === 'Esc' || event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  document.addEventListener('keydown', handleEscape);
  return (
    <div className="relative ml-6 sm:mt-1">
      <button
        className="relative z-10 block w-8 h-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://source.unsplash.com/mEZ3PoFGs_k"
          alt=""
          className="h-full v-full object-cover"
        />
      </button>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          tabIndex="-1"
          className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"
        ></button>
      )}
      {isOpen && (
        <div className="absolute top-auto right-0 mt-2 py-2 bg-white rounded-lg shadow-xl">
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Cong Dao
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Achievement
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Settings
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default AccountDropDown;
