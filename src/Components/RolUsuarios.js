import React, { useState, useEffect } from 'react';

function RolUsuarios() {
  const [totalAdministador, setTotalAdministador] = useState(0);
  const [totalCliente, setTotalCliente] = useState(0);
  const [totalVendedor, setTotalVendedor] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3005/user/api/');
        if (response.ok) {
          const data = await response.json();
          // Filtra los usuarios por su rol y cuenta el total de cada categoría
          const administador = data.filter(user => user.rol === 'Administador');
          const cliente = data.filter(user => user.rol === 'Cliente');
          const vendedor = data.filter(user => user.rol === 'Vendedor');
          setTotalAdministador(administador.length);
          setTotalCliente(cliente.length);
          setTotalVendedor(vendedor.length);
        } else {
          throw new Error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUserData();
  }, []); // El segundo argumento vacío garantiza que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div className="total-libros-box" style={{ width: '350px', height: '220px', marginTop: '90px', marginLeft: '170px', padding: '20px' }}  >
      <h2 className="total-libros-title" style={{backgroundColor:"black",height:"47px", paddingTop:"12px", color:"white", width:"348px", position:'relative', right:"22px", bottom:"22px"}} >Rol de Usuarios </h2>
      <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px"}} >Administradores: {totalAdministador}</p>
      <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px"}} >Clientes: {totalCliente}</p>
      <p style={{ color: 'black', fontWeight:"bold", fontSize:"16px"}} >Vendedores: {totalVendedor}</p>
    </div>
  );
}

export default RolUsuarios;