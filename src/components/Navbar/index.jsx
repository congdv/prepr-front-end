import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import AccountDropDown from '../AccountDropDown';
import NotificationDropDown from '../NotificationDropDown';
import MessagesDropDown from '../MessagesDropDown';
import NewsFeed from '../NewsFeed';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-light-100 sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 ">
        <div>
          <img className="h-8" src={logo} alt="Prepr" />
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="focus:text-black text-gray-500 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {!isOpen ? (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-4 pt-2 pb-4 sm:block sm:flex`}
      >
        <NewsFeed />
        <MessagesDropDown />
        <NotificationDropDown />
        <AccountDropDown />
      </div>
    </header>
  );
};

export default Navbar;
