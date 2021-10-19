import React, { Link } from 'react';

function Header() {
  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/details">DETALHES</Link>
      <Link to="/about">SOBRE O CAÊ</Link>
      <Link to="/comments">COMENTÁRIOS</Link>
    </>
  );
}

export default Header;
