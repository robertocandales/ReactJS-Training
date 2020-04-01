import React, { Fragment, useState } from "react";
import Mostrar from "./Mostrar";
import Formulario2 from "./Formulario2";
import Header from "./Header";

function Formulario1() {
  const [mostrarTarea, setmostrarTarea] = useState([]); // boton nuevo

  const taskCreator = tarea => {
    setmostrarTarea([...mostrarTarea, tarea]);
    console.log(mostrarTarea);
  };

  const [saveDatos, setsaveDatos] = useState([
    {
      
      nombre: "Roberto",
      apellido: "Candales"
    },
    {
      
      nombre: "Wolfang",
      apellido: "Amadeus"
    },
    {  nombre: "Galileo", apellido: "Galilei" }
  ]);

  const taskcreator1 = (dato) => {
    //console.log(dato);

    setsaveDatos([
      ...saveDatos,
      { nombre: dato.nombre, apellido: dato.apellido }
    ]);
   // console.log(saveDatos);
  };

  // Boton Delete

const deletHandler = (id) =>{
    //console.log('id conseguido ' + id)
    //console.log('id oroginal ' + saveDatos.filter(t => t.id))
    setsaveDatos(saveDatos.filter((user, index) => index !== id ));
    //console.log(saveDatos)
}
  return (
    <Fragment>
        <Header />
      <div className="mt-3">
        <Formulario2 taskcreator1={taskcreator1} deletHandler={deletHandler} saveDatos={saveDatos} />
      </div>

      <div className="mt-3">
        <Mostrar taskCreator={taskCreator} />
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h1>Otros</h1>
          {mostrarTarea.map(t => (
            <h5 key={t.index}>{t}</h5>
          ))}
        </div>

        
      </div>
    </Fragment>
  );
}

export default Formulario1;
