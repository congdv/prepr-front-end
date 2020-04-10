import React, { useState } from 'react';
import logo from './assets/images/logo.png';
import profile from './assets/images/profile.png';
import bell from './assets/images/bell.png';
import newsfeed from './assets/images/newsfeed.png';
import message from './assets/images/message.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEscape = (event) => {
    if (event.key === 'Esc' || event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  document.addEventListener('keydown', handleEscape);

  return (
    <div className="w-full">
      <div className="bg-light-100 flex flex-wrap">
        <nav className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0w-1/2 bg-light-100">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a className="text-white" href="/">
              <img src={logo} alt="Prepr" srcset="" />
            </a>
          </div>

          <div className="block lg:hidden">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="w-full lg:w-auto hidden lg:block" id="nav-content">
            <ul className="lg:flex items-center">
              <li className="flex-1">
                <a className="py-2" href="/newsfeed">
                  <img
                    src={newsfeed}
                    alt="newsfeed"
                    srcset=""
                    className="w-1/4"
                  />
                </a>
              </li>
              <li className="flex-1">
                <a className=" py-2" href="/messages">
                  <img
                    src={message}
                    alt="message"
                    srcset=""
                    className="w-1/4"
                  />
                </a>
              </li>
              <li className="flex-1">
                <a className=" py-2 " href="/profile">
                  <img
                    src={bell}
                    alt="Notification"
                    srcset=""
                    className="w-1/2"
                  />
                </a>
              </li>
              <li className="flex-1">
                <div className="relative">
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
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500"
                        href="/profile"
                      >
                        Cong Dao
                      </a>
                      <a
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500"
                        href="/profile"
                      >
                        Achievement
                      </a>
                      <a
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500"
                        href="/profile"
                      >
                        Settings
                      </a>
                      <a
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500"
                        href="/profile"
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container w-full mt-32 mx-auto ">
        <div className="text-center">
          <input
            type="text"
            className="border-black rounded-md bg-light-200 w-1/2 p-2"
            placeholder="Search labs, projects, challenges"
          />
        </div>

        <div className="container w-full flex">
          <div className="w-1/4 bg-light-400 mt-8 rounded">
            <ul className="my-4 mx-4">
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Explore
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
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Projects
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
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Labs
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
              </li>{' '}
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Challenge
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
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Resources
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
              <li className="mt-4 px-4">
                <a
                  href="/explore"
                  className="px-2 py-4 relative block hover:border-black border-b transition duration-500 ease-linear hover:font-semibold"
                >
                  Organisation
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
          <div>
            <div className="max-w-3xl rounded overflow-hidden shadow-lg px-4 py-4 mx-auto mt-8 ml-4 bg-light-200">
              <div className="flex">
                <div className="flex">
                  <a href="/organizer">
                    <img src={logo} alt="hello" srcset="" />
                  </a>

                  <div className="font-bold text-xl ml-6">
                    <a href="/organizer">
                      Innovation, Science and Economic Development Canada
                    </a>
                  </div>
                </div>
                <div>
                  <button className="inline-block bg-light-300 rounded-full px-3 py-1 text-sm font-semibold">
                    Challenge
                  </button>
                </div>
              </div>
              <div className="rounded hover:shadow-md px-4 py-4 mt-8 border-solid border border-black hover:bg-light-100">
                <div className="cursor-pointer ">
                  <a href="/detail" className="font-bold">
                    COVID-19 Challenge - Low-cost monitoring system for COVID-19
                    patients
                  </a>
                  <p className="pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati ducimus laboriosam odio officia unde officiis
                    porro ratione molestias, pariatur, perferendis voluptates
                    consequatur illo quas possimus natus tenetur, eligendi
                    libero iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
