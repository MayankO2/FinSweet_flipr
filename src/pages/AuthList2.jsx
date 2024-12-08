import React from 'react';
import jacob from '../assets/IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg';
import guy from '../assets/IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg';
import pena from '../assets/IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg';
import robert from '../assets/IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg';
import Insta from '../assets/Icons/Negative (2).svg';
import LinkedIn from '../assets/Icons/Negative (3).svg';
import Twit from '../assets/Icons/Negative (4).svg';
import fb from '../assets/Icons/Negative.svg';


const AuthList2 = () => {
  // Sample data for authors
  const authors = [
    {
      name: "Guy hawkins",
      location: "New York, USA",
      image: guy
    },
    {
      name: "Eleanor Pena",
      location: "Los Angeles, USA",
      image: pena
    },
    {
      name: "Robert fox",
      location: "London, UK",
      image: robert
    },

    {
        name: "Jacob Jones",
        location: "London, UK",
        image: jacob
      },
    // Add more authors as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {authors.map((author, index) => (
          <div key={index} className="bg-whitePrimary hover:bg-whiteAlt p-6 rounded-lg shadow-lg text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border mx-auto mb-4">
            <img
              src={author.image || "https://via.placeholder.com/150"}
              alt={author.name || "Image not found"}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">{author.name}</h3>
          <p className="text-gray-400 text-sm mb-1">{author.location}</p>
          <div className='flex flex-row justify-center gap-5'>
          <img src={fb
          } alt="" />
          <img src={Twit
          } alt="" />
          <img src={Insta
          } alt="" />
          <img src={LinkedIn
          } alt="" />
        </div>
        
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default AuthList2;
