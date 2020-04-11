import React from 'react';
import logo from '../../assets/images/logo.png';
import AccountDropDown from '../AccountDropDown';
import NotificationDropDown from '../NotificationDropDown';
import MessagesDropDown from '../MessagesDropDown';
import NewsFeed from '../NewsFeed';
const Navbar = () => {
  return (
    <header className="bg-light-100 fixed top-0 right-0 left-0 ">
      <div className="flex justify-between items-center sm:w-3/4 mx-auto">
        <div className="flex items-center justify-between px-4 py-3 ">
          <button>
            <img className="h-8" src={logo} alt="Prepr" />
          </button>
        </div>

        <div className="block px-4 pt-2 pb-4 block flex">
          <NewsFeed />
          <MessagesDropDown />
          <NotificationDropDown />
          <AccountDropDown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
