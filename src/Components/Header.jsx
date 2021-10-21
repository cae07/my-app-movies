import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>SUGESTFLIX</h1>
      <nav className="nav-conteiner">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Quem é Caê</Link>
        <Link className="link" to="/comments">Comentários</Link>
      </nav>    </div>
  );
}

export default Header;
