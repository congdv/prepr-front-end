import React, { useState } from 'react';
import MessageLogo from '../../assets/images/mail.svg';

const MessagesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ml-6 sm:mt-2">
      <button
        className="relative z-10 block w-6 h-6  overflow-hidden focus:outline-none focus:border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={MessageLogo} alt="" className="h-full v-full object-cover" />
      </button>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          tabIndex="-1"
          className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"
        ></button>
      )}
      {isOpen && (
        <div className="absolute top-auto right-0 mt-2 py-2 bg-white rounded-lg shadow-xl w-64">
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Prepr sent you a message
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Prepr sent you a message
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            Prepr sent you a message
          </a>
          <a
            className="block px-4 py-2 text-gray-800 hover:bg-light-400"
            href="/profile"
          >
            See All
          </a>
        </div>
      )}
    </div>
  );
};

export default MessagesDropDown;
