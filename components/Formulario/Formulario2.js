import React, { useState } from "react";

function Formulario2(props) {
  const [datos, setDatos] = useState("");

  const eventHandler = e => {
    // const { value, name } = e.target;
    setDatos({
      //id: e.target.value.length + 1,
      nombre: e.target.value,
      apellido: e.target.value
      // [name]: value
    });
    // console.log(datos)
    // setDatos({ [e.target.name]: e.target.value });

    // setDatos({[name]: value })
  };

  const sendHandler = e => {
    e.preventDefault();
    //console.log(datos);
    props.taskcreator1(datos);
  };

  return (
    <div>
      <form className="row mt-4 container-fluid" onSubmit={sendHandler}>
        <div className="col-md-3 ">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            // value={datos.nombre}
            onChange={eventHandler}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="apellido"
            className="form-control"
            placeholder="Apellido"
            //value={datos.apellido}
            onChange={eventHandler}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary form-control">Enviar</button>
        </div>
      </form>
      <div className="col-mt-6 text-center">
        <h1>Datos de Usuario</h1>
        {props.saveDatos.map((t, index) => (
          <div className="row row-cols-3" key={index}>
            <div className="col">{t.nombre}</div>
            <div className="col">{t.apellido}</div>
            <div className="col">
              <button
                className="btn btn-dark form-control"
                onClick={() => props.deletHandler(index)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formulario2;
