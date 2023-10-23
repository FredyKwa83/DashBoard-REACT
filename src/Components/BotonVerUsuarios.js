import React from 'react';

const buttonStyle = {
  borderRadius: '10px', // Bordes redondeados
  border: '2px solid #ff0000', // Color en el borde (rojo en este ejemplo)
  padding: '10px 20px', // Espaciado interno
  fontSize: '16px', // Tamaño de fuente
  color: 'white',
  fontWeight: "bold",
  backgroundColor:"red",
  position: 'relative',
  top: '-80px', 
  left: '20px' 
};


function BotonVerUsuarios() {
  const redirectToExternalLink = () => {
    // Aquí debes especificar la URL externa a la que deseas redirigir
    const externalLink = 'https://www.youtube.com/watch?v=71VO7qq624I';

    // Abre la URL en una nueva pestaña o ventana del navegador
    window.open(externalLink, '_blank');
  };

  return (
   
    <button style={buttonStyle} onClick={redirectToExternalLink}>
      Ver Users
    </button>
  );
}

export default BotonVerUsuarios;