import React from 'react';
import SiteLogo from '../../assets/images/site.svg';
const NewsFeed = () => {
  return (
    <div className="ml-2 sm:mt-2">
      <button className="relative block w-6 h-6 ">
        <img src={SiteLogo} alt="" className="h-full v-full object-cover" />
      </button>
    </div>
  );
};

export default NewsFeed;
