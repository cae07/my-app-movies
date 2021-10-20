import React from 'react';
import '../CSS/header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>SUGESTFLIX</h1>
      <nav className="nav-conteiner">
        <a className="link" href="/my-app-movies">HOME</a>
        <a className="link" href="/my-app-movies/about">SOBRE O CAÊ</a>
        <a className="link" href="/my-app-movies/comments">COMENTÁRIOS</a>
      </nav>
    </div>
  );
}

export default Header;
