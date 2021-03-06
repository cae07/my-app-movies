import React from 'react';
import movies from '../Data.';
import '../CSS/cards.css';

function Cards() {
  const handleClick = ({ target: { value } }) => {
    console.log(value);
  };

  return (
    <div className="cards-container-1">
      {movies.map((movie, idx) => (
        <section
          className="cards-container"
          key={ `${movie.title}-${idx}` }
        >
          <div className="card-image">
            <img
              src={ movie.imagePath }
              alt={ `card filme: ${movie.title}` }
              height="300px"
            />
            <button value={ movie.title } onClick={ handleClick }>
              detalhes
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Cards;
