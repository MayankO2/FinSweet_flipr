import React from 'react';
import image from '../assets/IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg';
const DiscoverPage = () => {
  return (
    <div  className="relative h-[75vh] w-[80%] bg-cover bg-left m-4 mx-auto rounded-lg shadow-lg" 
    style={{ backgroundImage: `url(${image})` }}>
      

      {/* Bottom-right content box */}
      <div className="absolute bottom-8 right-8 bg-whitePrimary p-6 rounded-lg shadow-lg z-10 w-1/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Discover the World
        </h2>
        <p className="text-gray-600 mb-4">
        Embark on a journey to explore breathtaking landscapes, vibrant cities, and unique cultures.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis ratione nobis dolore pariatur saepe quibusdam facilis eos, labore dolorum. Asperiores earum placeat vero ipsum ad blanditiis laboriosam, iure molestiae ex harum nulla provident. Mollitia alias maxime provident veniam laudantium!
        </p>
        <button className="bg-yellowAccent py-2 px-4 rounded-lg hover:bg-whiteAlt transition duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default DiscoverPage;
