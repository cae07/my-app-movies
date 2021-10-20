import React from 'react';
import '../CSS/header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>SUGESTFLIX</h1>
      <nav className="nav-conteiner">
        <a className="link" href="/">HOME</a>
        <a className="link" href="/about">SOBRE O CAÊ</a>
        <a className="link" href="/comments">COMENTÁRIOS</a>
      </nav>
    </div>
  );
}

export default Header;
