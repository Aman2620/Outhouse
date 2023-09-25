import React, { useState, useEffect } from 'react';

const images = [
  'images/03.png',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [enlightenmentText, setEnlightenmentText] = useState('Enlightenment');

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnlightenmentText((prevText) => {
        return prevText === 'Enlightenment...' ? 'Advancement...' : 'Enlightenment...';
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {currentImage === 0 && (
        <div className="absolute top-40 left-40 text-white">
          <p style={{ fontSize: '50px' }} className="font-bold text-left">
            Divine Wisdom in Words: 
            The <br /> <span style={{ color: 'yellow' }}> Bhagavad Gita UNVEILED</span>  - <br />Listen to the <span style={{ color: 'yellow' }}>Sacred Verses and</span> <br />
            Embrace Spiritual <span style={{ color: 'yellow' }}>  {enlightenmentText} </span>
          </p>
        </div>
      )}
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-90 object-cover"
      />
    </div>
  );
};

export default Carousel;
