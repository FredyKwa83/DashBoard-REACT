import React from "react";


const ListarLibros = ({libros}) => {
    return (
    <table className="table">
            <thead>
                <tr style={{ textAlign: 'center'}} >
                    <th style={{ background: "black", color:"white"}} >Id</th>
                    <th style={{ background: "black", color:"white"}}>Nombre</th>
                    <th style={{ background: "black", color:"white"}}>Precio</th>
                    <th style={{ background: "black", color:"white"}}>Descuento</th>
                </tr>
            </thead>

            <tbody>
                {libros.map(libro => (
                    <tr style={{textAlign:"center"}} key={libro.id}>
                        <th>{libro.id}</th>
                        <th>{libro.nombre}</th>
                        <th>{libro.precio}</th>
                        <th>{libro.descuento}</th>
                    </tr>
                ))}
                
            </tbody>
    </table>
    )
    
}

export default ListarLibros;