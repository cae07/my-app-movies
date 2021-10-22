import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <h5>All Rights Reserved</h5>
      <h5>projeto realizado pelo Caê Calçolari</h5>
      <nav className="nav-conteiner">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Quem é Caê</Link>
        <Link className="link" to="/comments">Comentários</Link>
      </nav>
    </>
  );
}

export default Footer;
