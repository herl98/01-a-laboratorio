import React, { useState } from "react";
import ModalPerfil from "./ModalPerfil";

const Navbar: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <nav>
        <button onClick={() => setShowProfile(true)}>
          Perfil
        </button>

        <button>Carrito</button>
        <button>Catálogo</button>
        <button>Contactos</button>
      </nav>

      <ModalPerfil
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default Navbar;