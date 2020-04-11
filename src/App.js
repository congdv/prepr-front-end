import React from 'react';
import logo from './assets/images/logo.png';
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';
import Sidebar from './components/Sidebar';

const cards = [
  {
    id: 1,
    organizer: 'Innovative Solutions Canada ',
    organizerImage: './assets/images/logo.png',
    type: 'Challenge',
    title:
      'COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae laborum iste nesciunt perferendis, rerum earum dignissimos eius totam cupiditate in alias vel blanditiis. Optio at quidem in corrupti laboriosam.',
  },
  {
    id: 2,
    organizer: 'Innovative Solutions Canada ',
    organizerImage: './assets/images/logo.png',
    type: 'Challenge',
    title:
      'COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae laborum iste nesciunt perferendis, rerum earum dignissimos eius totam cupiditate in alias vel blanditiis. Optio at quidem in corrupti laboriosam.',
  },
  {
    id: 3,
    organizer: 'Innovative Solutions Canada ',
    organizerImage: './assets/images/logo.png',
    type: 'Challenge',
    title:
      'COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae laborum iste nesciunt perferendis, rerum earum dignissimos eius totam cupiditate in alias vel blanditiis. Optio at quidem in corrupti laboriosam.',
  },
];

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="container w-full mt-20 mx-auto ">
        <div className="text-center">
          <input
            type="text"
            className="border-black rounded-md bg-light-200 w-1/2 p-2"
            placeholder="Search labs, projects, challenges"
          />
        </div>

        <div className="container w-full flex">
          <Sidebar />
          <div>
            {cards.map((card) => (
              <MainCard
                key={card.id}
                logo={logo}
                organizer={card.organizer}
                link={'/link'}
                type={card.type}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
