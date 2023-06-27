import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav>
      <h3>Tienda virtual</h3>
      <button>Botón 1</button>
      <button>Botón 2</button>
      <button>Botón 3</button>
      <CartWidget />
    </nav>
  );
}

export default Navbar;