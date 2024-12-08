import React from 'react';
import img1 from '../assets/IMAGES/ground-group-growth-hands-461049.svg'
import img2 from '../assets/IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg'
const Grid = () => {
  const gridItems = [
    {
      id: 1,
      title: 'Our team of creatives', 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eligendi distinctio est quod fugiat explicabo eius voluptatem quasi ullam pariatur voluptates fugit ducimus esse illum voluptas exercitationem, eaque quos provident.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione cupiditate architecto voluptate. Facere, quidem sit.'
      ,
      // Replace with your image URL
    },
    {
      id: 2,
      title: 'Mountain Adventures',
      description: 'Conquer peaks and enjoy breathtaking views.',
      imageUrl: img1,
    },
    {
      id: 3,
      title: 'City Escapes',
      description: 'Discover vibrant cityscapes and hidden gems.',
      imageUrl: img2,
    },
    {
      id: 4,
      title: 'Why we started this blog',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eligendi distinctio est quod fugiat explicabo eius voluptatem quasi ullam pariatur voluptates fugit ducimus esse illum voluptas exercitationem, eaque quos provident.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione cupiditate architecto voluptate. Facere, quidem sit.',
     
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto justify-center px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Discover More
        </h2>
        
        <div className="pl-20 grid grid-cols-2  gap-6">
  {gridItems.map((item) => (
    <div
      key={item.id}
      className="bg-white w-3/4 h-4/5 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      {(item.id === 2 || item.id === 3) ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover bg-cover"
        />
      ) : null}

      {(item.id === 1 || item.id === 4) ? (
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ) : null}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Grid;
