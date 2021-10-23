import React from 'react';
import '../CSS/header.css';

function Header() {
  const moviesTypes = [
    'Categorias',
    'Ação',
    'Aventura',
    'Romance',
    'Drama',
    'Comédia',
    'Terror',
    'Suspense',
    'Espírita',
    'Comédia Romântica',
    'Ficção',
    'Séries',
  ]

  return (
    <div className="header-container">
      <h1>SUGESTFLIX</h1>
      <label htmlFor="input-filter">
        <select className="select-categories">
          {moviesTypes.map(((type) => (
            <option value={ type }>{ type }</option>
          )))}
        </select>
      </label>
    </div>
  );
}

export default Header;
