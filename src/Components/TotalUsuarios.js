import React, { useState, useEffect } from 'react';

function TotalUsuarios() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    // Realiza la solicitud HTTP para obtener la lista de usuarios
    fetch('http://localhost:3004/user/api/')
      .then((res) => res.json())
      .then((data) => {
        setTotalUsuarios(data.length); // Actualiza el estado totalUsuarios con la cantidad de usuarios
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []);

  return (
    <div className="total-libros-box" style={{ width: '250px', height: '120px', marginTop: '-80px', marginLeft: '170px', padding: '20px' }}>
        <h3 className="total-libros-title" > Usuarios Registrados:</h3>
        <p className="total-libros-count" >{totalUsuarios}</p>
    </div>

  );
}

export default TotalUsuarios;






