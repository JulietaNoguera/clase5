import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Socio = ({socio ,borrarSocio ,modificarSocio}) => {

    return (
        <>        
        <Card border="info" style={{ width: '18rem' , borderWidth:'3px'}}>
            <Card.Body>
                <Card.Title>Socio </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{socio.id}</Card.Subtitle>
                <Card.Text>
                    <b> Nombre: </b> {socio.nombre}<br />
                    <b> DNI: </b> {socio.dni}
                </Card.Text>
        
           
                <Button variant="outline-danger" onClick={()=> borrarSocio(socio.id)}>
                        Borrar</Button> {'     '}

                <Button variant="outline-info" onClick={()=> modificarSocio(socio.id)}>
                        Modificar</Button>
            </Card.Body>
        </Card>
        
        <br />

     </>
     );

}
 
export default Socio;