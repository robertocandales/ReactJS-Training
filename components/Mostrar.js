import React, {useState} from 'react'

export default function Mostrar() {

    const [contador, setContador] = useState (0) // PARA USAR EL HOOK DE REACTJS16

    return (
        <div>

            El contador es {contador}
            <button className = "btn btn-warning" onClick ={()=> setContador(contador+1)}>aumentar cuenta</button>
            
        </div>
    )
} 

