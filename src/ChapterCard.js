import React, { useState } from 'react';

const ChapterCard = ({ chapters }) => {
  const [visibleChapters, setVisibleChapters] = useState(4);

  const handleLoadMore = () => {
    setVisibleChapters(prevVisibleChapters => prevVisibleChapters + 4);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {chapters.slice(0, visibleChapters).map((chapter, index) => (
        <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
          <a href="#"><img className="w-full" src={chapter.img} alt={chapter.name} /></a>
          <div className="px-6 py-4">
            <div className="font-bold text-l mb-2">{chapter.name}</div>
            <div className="font text-l mb-2 text-left">{chapter.description}</div>
          </div>
        </div>
      ))}

      {visibleChapters < chapters.length && (
        <div className="text-center mt-4 w-full">
          <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ChapterCard;
