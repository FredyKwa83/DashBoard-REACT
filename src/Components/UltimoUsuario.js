import React, { useState, useEffect } from 'react';

function UltimoUsuario() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    const fetchLastUser = async () => {
      try {
        const response = await fetch('http://localhost:3004/user/api/');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        // Suponemos que la API devuelve una lista de usuarios ordenados por fecha de registro.
        const latestUser = data[data.length - 1];
        setLastUser(latestUser);
      } catch (error) {
        console.error('Error al obtener el último usuario:', error);
      }
    };

    fetchLastUser();
  }, []); // El segundo argumento vacío garantiza que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div className="total-libros-box" style={{ width: '350px', height: '220px', marginTop: '90px', marginLeft: '170px', padding: '20px' }} >
      <h2 className="total-libros-title" style={{backgroundColor:"black",height:"47px", paddingTop:"12px", color:"white", width:"348px", position:'relative', right:"22px", bottom:"22px"}} >Último Usuario Registrado </h2>
      {lastUser ? (
        <div>
          <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px"}}>Nombre: {lastUser.nombre}</p>
          <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px" }} >Email: {lastUser.email}</p>
          <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px" }} >Rol: {lastUser.rol}</p>
        </div>
      ) : (
        <p>Cargando el último usuario...</p>
      )}
    </div>
  );
}

export default UltimoUsuario;