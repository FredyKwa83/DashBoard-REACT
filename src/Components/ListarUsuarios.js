import React, { useState, useEffect } from 'react';


function ListarUsuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP para obtener la lista de usuarios
    fetch('http://localhost:3005/user/api/')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error al obtener la lista de usuarios: ', error));
  }, []);

  return (
    <div>
      
      <table className="table"  >
        <thead>
        <tr style={{ textAlign:'center' }}>
            <th style={{ background: "black", color: "white", width: "50px"}}>Id</th>
            <th style={{ background: "black", color: "white", width: "800px" }}>Nombre</th>
            <th style={{ background: "black", color: "white", width: "1000px" }}>Email</th>
            <th style={{ background: "black", color: "white", width: "800px" }}>UserName</th>
            <th style={{ background: "black", color: "white", width: "300px" }}>Rol</th>
        </tr>
        </thead>

        <tbody>
          {users.map((user) => (
          <tr key={user.id} style={{ textAlign:'center' }}>
            <td style={{ fontWeight: 'bold' }}>{user.id}</td>
            <td style={{ fontWeight: 'bold' }}>{user.nombre}</td>
            <td style={{ fontWeight: 'bold' }}>{user.email}</td>
            <td style={{ fontWeight: 'bold' }}>{user.username}</td>
            <td style={{ fontWeight: 'bold' }}>{user.rol}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default ListarUsuarios;


