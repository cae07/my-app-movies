import React from 'react';
import movies from '../Data.';
import '../CSS/cards.css';

function Cards() {
  return (
    <div className="cards-container-1">
      {movies.map((movie, idx) => (
        <section
          className="cards-container"
          key={ `${movie.title}-${idx}` }
        >
            <img
              className="card-image"
              src={ movie.imagePath }
              alt={ `card filme: ${movie.title}` }
              height="300px"
            />
        </section>
      ))}
    </div>
  );
}

export default Cards;
