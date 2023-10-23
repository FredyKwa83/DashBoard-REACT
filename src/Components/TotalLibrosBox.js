import React, { useState, useEffect } from 'react';
import './TotalLibrosBox.css';

const TotalLibrosBox = () => {
  const [totalLibros, setTotalLibros] = useState(0);

  useEffect(() => {
    const getLibros = () => {
      fetch('http://localhost:3005/api/')
        .then((res) => res.json())
        .then((data) => {
          setTotalLibros(data.total); // Actualiza el estado con la cantidad total de libros
        })
        .catch((error) => {
          console.error('Error al obtener los libros:', error);
        });
    };
    getLibros();
  }, []);

  return (
    
    <div className="total-libros-box" style={{ width: '250px', height: '120px', marginTop: '90px', marginLeft: '170px', padding: '20px' }}>
      <h3 className="total-libros-title" >Total de Libros:</h3>
      <p className="total-libros-count" >{totalLibros}</p>
    </div>
  );
};

export default TotalLibrosBox;






