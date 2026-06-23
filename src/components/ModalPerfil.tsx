import React from "react";

interface ModalPerfilProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPerfil: React.FC<ModalPerfilProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
        }}
      >
        <h2>Perfil de Usuario</h2>

        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Correo:</strong> juan@correo.com</p>
        <p><strong>Rol:</strong> Administrador</p>

        <button onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalPerfil;