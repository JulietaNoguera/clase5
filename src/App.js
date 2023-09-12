/* eslint-disable no-sequences */
import './App.css';
import Formulario from './components/Formulario';
import Socio from './components/Socio';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  //GENERAMOS UN STATE VACIO CON LOS SOCIOS DEL GYM
  const [asociados,editarAsociados]= useState([]);

  //CREAMOS UNA FUNCION PARA RECIBIR UN SOCUO NUEVO Y AGREGAR A LA LISTA DE ASOCIADOS
  const agregarSocio=(socio)=>{
    editarAsociados([
      ...asociados,
      socio
    ]);
  }
  //FUNCION PARA BORRAR EL SOCIO
  //NO SE OLVIDEN EL ID COMO PARAMETRO

  const borrarSocio=(id)=>{
    const nuevoSocios= asociados.filter(socio=> socio.id !== id)
    editarAsociados(nuevoSocios)
  }

  //FUNCION PARA MODIFICAR UN SOCIO
  const modificarSocio = (id)=> {
    //filtrar y quedarse con el usuario a modificar
    const socioAModificar = asociados.find((socio) => socio.id === id);

    //modificarl los datos al usuario
    let nuevoNombre= prompt('Ingrese Nombre') 
    const socioModificado = {
      ...socioAModificar,
      ...{ nombre: nuevoNombre},

    };
    //actualizar la lista de asociados con el socio modificado  
    const nuevosAsociados = asociados.map((socio) =>
      socio.id === id 
      ? socioModificado 
      : socio
    );
    editarAsociados(nuevosAsociados);

  }




  return (
   
    <Container className="mt-4 p-5 bg-dark text-white rounded" >
      <Row >
        <Col><h1>Gimnasio unahur</h1></Col>
      </Row>
      <Row xs={1} md={2}>
        <Col><Formulario
            agregarSocio={agregarSocio}/>
        </Col>

        <Col>
          <h3>Lista de socios</h3>
          {
            asociados.map(
              socio=>
              <Socio
                socio={socio}
                key= {socio.id}
                borrarSocio={borrarSocio}
                modificarSocio={modificarSocio}
              />
            )
          }
        </Col>
      </Row>
      
    </Container>

  );
}

export default App;
