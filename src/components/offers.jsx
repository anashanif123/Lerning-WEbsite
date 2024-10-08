import React from 'react';
import image from "../assets/image 7.png";
import image2 from "../assets/image 8.png";

function Offers() {
  const offers = [
    {
      discount: '50%',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      imageUrl: image,
    },
    {
      discount: '10%',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      imageUrl: image2,
    },
    {
      discount: '50%',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      imageUrl: image,
    },
  ];

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Top Education offers and deals are listed here</h2>
        <a href="/" className="text-cyan-500">See all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative  bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${offer.imageUrl})`, 
              height: offer.description.length > 100 ? '300px' : '250px', 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full font-bold mb-2">{offer.discount}</span>
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm text-center">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;