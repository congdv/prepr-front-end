import React from 'react';

const Item = ({ label, link }) => {
  return (
    <li className="mt-4 px-4">
      <a
        href={link}
        className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
      >
        {label}
        <span className="inline-block absolute top-12 right-0">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="11.000000pt"
            height="15.000000pt"
            viewBox="0 0 11.000000 15.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,15.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M14 135 c-4 -9 2 -25 15 -39 l21 -23 -20 -18 c-21 -19 -27 -45 -9
-45 14 0 79 53 79 65 0 6 -18 25 -40 43 -34 28 -41 31 -46 17z m49 -33 l27
-28 -30 -29 c-16 -16 -32 -26 -35 -23 -3 2 6 15 20 28 l25 24 -27 28 c-15 15
-22 28 -17 28 6 0 22 -13 37 -28z"
              />
            </g>
          </svg>
        </span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  const menu = [
    'Explore',
    'Projects',
    'Labs',
    'Challenge',
    'Resources',
    'Organization',
  ];
  return (
    <div className="w-1/4 bg-light-400 mt-8 rounded h-full pb-10">
      <ul className="my-4 mx-4">
        {menu.map((item, index) => (
          <Item key={index} label={item} link={'/' + item} />
        ))}
      </ul>
      <div className="my-4 ml-10">
        <ul>
          <li className="mt-2">
            <a href="/help">Help</a>
          </li>
          <li className="mt-2">
            <a href="/term">Term of use</a>
          </li>
          <li className="mt-2">
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
