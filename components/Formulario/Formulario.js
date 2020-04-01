import React, {Fragment} from 'react'
import Formulario1 from './Formulario1';

const Formulario = () => {
    

        // Agregar Usuario
        // const Adduser = (user) => {
        //     user.id = datos.id.length +1
        //     setDatos([{
        //         ...datos, user
        //     }])
        //     console.log('addUser'+ datos)
        // }

    return (
        <Fragment>
            
            <h1 className="text-center mt-4"> 
                Formulario
            </h1>
            <Formulario1 />
            
        </Fragment>
    )
}

export default Formulario
