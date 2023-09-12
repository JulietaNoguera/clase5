import React, { useState } from 'react'
import {Button, Form, Alert} from 'react-bootstrap';
import {v4 as uuid}from 'uuid';
const Formulario = ({agregarSocio}) => {

    //CREO SOCIO VACIO CON UN STATE
    const [socio, editarSocio]= useState({
        nombre:"",
        dni:""
    });

    //EXTRAER VALORES
    const{ nombre, dni}= socio;

    //CREAMOS UN HOOK DE ESTADO PARA EL ERROR EN EL FOMRULARIO
    const [error, setError]= useState(false)

    // RECOLECTAR LO QUE EL USU ESCRIBE EN EL FORM
    const handleChange= (e)=>{
        //console.log(e.target.name.value)
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value
        });
    };

    //FUNCION QUE SE EJECUTA CUANDO ENVIAMOS EL FORMULARIO
    const submitForm=(e)=>{
        //console.log("Enviamos formulario");
        e.preventDefault();

        //validar el fomrulario
        if(nombre.trim()===''  || dni.trim()===''){
            setError(true);
            return;
        }
        //logica para mensaje de error(quitar)
        setError(false);

        //ponerle un id al socio
        socio.id= uuid();
        console.log(socio)

        //Guardar el socio 
        agregarSocio(socio)

        //limpiar formulario
        editarSocio(
            {
                nombre:"",
                dni:""
            }
        )
    };

    return ( 

        <>
            <h3>Formulario de ingreso</h3>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="sin puntos ni espacios" 
                        name="dni"
                        onChange={handleChange}
                        value={dni}
                    />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Ingresar socio
                </Button>
                
            </Form>
            
                    
            {
                error
                ? <Alert variant='danger'> Debe completar los campos</Alert>
                :null
            }
             <br/>
        </>
     );
}
 
export default Formulario;