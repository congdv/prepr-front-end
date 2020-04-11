import React from 'react';

const MainCard = ({ logo, organizer, link, type, title, description }) => {
  console.log(title);
  return (
    <div>
      <div className="max-w-3xl rounded overflow-hidden shadow-lg px-4 py-4 mx-auto mt-8 ml-4 bg-light-200">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href={'/' + link}>
              <img src={logo} alt="hello" />
            </a>

            <div className="font-bold text-xl ml-6">
              <a href={'/' + link}>{organizer}</a>
            </div>
          </div>
          <div>
            <button className="inline-block bg-light-300 rounded-full px-3 py-1 text-sm font-semibold">
              {type}
            </button>
          </div>
        </div>
        <div className="rounded hover:shadow-md px-4 py-4 mt-8 border-solid border border-black hover:bg-light-100">
          <div className="cursor-pointer ">
            <a href={link} className="font-bold">
              {title}
            </a>
            <p className="pt-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
