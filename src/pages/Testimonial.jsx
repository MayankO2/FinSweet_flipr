import React from 'react';
import Smallimg from '../assets/IMAGES/Image.svg'; 

const Testimonial = () => {
  return (
    <div className="bg-cream p-8 font-body rounded-lg shadow-lg flex items-center bg-whiteAlt ">
      {/* Left Section */}
      <div className="w-1/2 -mt-20 ">
        <h2 className="text-xl font-bold mb-4">TESTIMONIALS</h2>
        <h1 className="text-4xl font-bold mb-4 w-1/2">What people say about our blog</h1>
        <h3 className="text-xl w-3/4 font-heading font-bold text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit ducimus error deleniti iusto quo!</h3>
      </div>

      {/* Partition Divider */}
      <div className="h-64 w-px bg-grayLight mx-4 opacity-50"></div>

      {/* Right Section */}
      <div className="w-1/2 pl-8 font-heading">
      <h3 className="text-xl mb-36 pt-10 font-heading font-bold text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet consectetur nesciunt quidem quibusdam labore, dolorum architecto hic totam, esse excepturi magni neque doloribus eos voluptate ipsum saepe deserunt nihil!</h3>
        {/* Testimonial */}
        <div className="flex items-center mb-4">
          <img
            src={Smallimg}
            alt="Jonathan Vallem"
            className="rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Jonathan Vallem</h4>
            <p className="text-gray-500">New York, USA</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end ">
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
