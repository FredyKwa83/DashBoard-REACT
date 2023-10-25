import React, {Fragment, useState, useEffect} from 'react';
import Navbar from "./Components/Navbar"
import ListarLibros from "./Components/ListarLibros"
import TotalLibrosBox from './Components/TotalLibrosBox';
import TotalUsuarios from './Components/TotalUsuarios';
import RolUsuarios from './Components/RolUsuarios';
import BotonVerUsuarios from './Components/BotonVerUsuarios';
import UltimoUsuario from './Components/UltimoUsuario';
import Button from './Components/Button';
import MyGif from './Components/MyGif';
import LogoLibros from './Components/LogoLibros';


function App() {

const [libros, setLibros] = useState([])

useEffect(() => {
  const getLibros = () => {
    fetch("http://localhost:3004/api/")
      .then(res => res.json())
      .then(data => {
        setLibros(data.data); // Actualiza el estado libros con los detalles de los libros
        const totalLibros = data.total; // Obtiene la cantidad total de libros
        console.log("Cantidad total de libros:", totalLibros);
      })
      .catch(error => {
        console.error("Error al obtener los libros:", error);
      });
  }
  getLibros();
}, []);

  return (
    <Fragment>
      <Navbar brand = "Libros Web - ARCOLIBROS"/>
      <div className='container'>
          <div className='row' >
              <div className='col-7' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', right:"100px"}} >
                  <h2 style={{ marginBottom: '30px', textAlign:"center", marginTop: '30px', color: "red", position:"relative", left:"280px"}}> Lista de Libros </h2>
                  <ListarLibros libros = {libros} />
              </div>

              <div className='col-5'>
                <div>
                    <h2 style={{ width: '250px', height: '120px', marginTop: '90px', marginLeft: '165px', padding: '20px'}}> ESTADÍSTICAS 
                       <MyGif/>
                    </h2>
                </div>

                <div>
                    <h2  style={{ position: 'relative', top: '-64px', left: '-135px', transform: 'scaleX(-1)' }} >
                        <MyGif/>
                    </h2>
                </div>
                      
               
                <div style={{ position: 'relative', top: '5px',  left: '-210px'}}>
                  <TotalLibrosBox />
                 
                </div>
                <div style={{ position: 'relative', top: '-200px', left: '-210px'}} className="App">
                  <TotalUsuarios />
                  {/* <BotonVerUsuarios /> */}
                </div>

                {/* <div className='col-7'>
                  <h2 style={{ marginBottom: '30px', textAlign:"center", marginTop: '30px', color: "red"}}> Lista de Usuarios </h2>
                  <ListarUsuarios />
                 
              </div> */}

              <div style={{ position: 'relative', top: '-410px', left: '80px'}} >
                <UltimoUsuario/>
              </div>

              <div style={{ position: 'relative', top: '-450px', left: '80px'}} >
                <RolUsuarios />
              </div>

              <div style={{ position: 'relative', top: '-550px', left: '-10x'}} >
              <Button />
              </div>

              
              <div style={{ position: 'relative', top: '-1100px', left: '-5x'}} >
              <LogoLibros />
              </div>
              

              </div>

              

          </div>
      </div>

    </Fragment>
  );
}

export default App;



