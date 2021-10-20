import React from 'react';
import '../CSS/header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>SUGESTFLIX</h1>
      <nav className="nav-conteiner">
        <a className="link" href="/my-app-movies">Home</a>
        <a className="link" href="/my-app-movies/about">Quem é Caê</a>
        <a className="link" href="/my-app-movies/comments">Comentários</a>
      </nav>
    </div>
  );
}

export default Header;
