import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Mi Tienda</h2>
      </div>

      <div className="navbar-menu">
        <button className="nav-btn">Perfil</button>
        <button className="nav-btn">Carrito</button>
        <button className="nav-btn">Catálogo</button>
        <button className="nav-btn">Contactos</button>
      </div>
    </nav>
  );
};

export default Navbar;