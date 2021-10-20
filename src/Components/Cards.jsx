import React from 'react';
import movies from '../Data.';

function Cards() {
  return (
    movies.map((movie) => (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } height="300px" />
      </section>
    ))
  );
}

export default Cards;
