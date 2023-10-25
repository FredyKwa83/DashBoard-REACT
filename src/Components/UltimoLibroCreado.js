// import React, { useState, useEffect } from 'react';

// function UltimoLibroCreado() {
//   const [lastBook, setLastBook] = useState(null);

//   useEffect(() => {
//     const fetchLastBook = async () => {
//       try {
//         const response = await fetch('http://localhost:3005/api/');
//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0) {
//             // Suponemos que la API devuelve una lista de libros y que el último libro es el primero en la lista.
//             const latestBook = data[0];
//             setLastBook(lastBook);
//           }
//         } else {
//           throw new Error('Error al obtener los datos');
//         }
//       } catch (error) {
//         console.error('Error al obtener el último libro:', error);
//       }
//     };

//     fetchLastBook();
//   }, []); // El segundo argumento vacío garantiza que useEffect se ejecute solo una vez al montar el componente.

//   return (
//     <div className="total-libros-box" style={{ width: '350px', height: '180px', marginTop: '90px', marginLeft: '170px', padding: '20px' }} >
//       <h2 className="total-libros-title"  >Último Libro Creado:</h2>
//       {lastBook ? (
//         <div>
//           <p style={{ color: '#6300f7', fontWeight:"bold" }} >Nombre: {lastBook.nombre}</p>
//           <p style={{ color: '#6300f7', fontWeight:"bold" }} >Precio: {lastBook.precio}</p>
//           {/* Agrega más propiedades según las que tengas en tu API */}
//         </div>
        
//       ) : (
//         <p>Cargando el último libro...</p>
//       )}
//     </div>
//   );
// }

// export default UltimoLibroCreado;

import React, { useState, useEffect } from 'react';

function UltimoLibroCreado() {
  const [lastBook, setLastBook] = useState(null);

  useEffect(() => {
    const fetchLastBook = async () => {
      try {
        const response = await fetch('http://localhost:3004/api/');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            // Suponemos que la API devuelve una lista de libros y que el último libro es el primero en la lista.
            const latestBook = data[0];
            setLastBook(latestBook); // Corregido: establece el último libro en el estado.
          }
        } else {
          throw new Error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al obtener el último libro:', error);
      }
    };

    fetchLastBook();
  }, []); // El segundo argumento vacío garantiza que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div className="total-libros-box" style={{ width: '350px', height: '180px', marginTop: '90px', marginLeft: '170px', padding: '20px' }} >
      <h2 className="total-libros-title"  >Último Libro Creado:</h2>
      {lastBook ? (
        <div>
          <p style={{ color: '#6300f7', fontWeight:"bold" }} >Nombre: {lastBook.nombre}</p>
          <p style={{ color: '#6300f7', fontWeight:"bold" }} >Precio: {lastBook.precio}</p>
          {/* Agrega más propiedades según las que tengas en tu API */}
        </div>
        
      ) : (
        <p>Cargando el último libro...</p>
      )}
    </div>
  );
}

export default UltimoLibroCreado;