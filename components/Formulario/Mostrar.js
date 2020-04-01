import React, { useState } from "react";

function Mostrar(props) {
  const [tarea, setTarea] = useState("");
  // console.log(props.datos)

  const click = e => {
    // console.log(e)
    setTarea(e.target.value);
  };
  const click1 = () => {
    //console.log(tarea)
    setTarea("");
    props.taskCreator(tarea);
  };

  return (
    <div className="container-fluid row mt4">
      <div className="col-md-6">
        <input
          type="text"
          name="prueba"
          className="form-control"
          value={tarea}
          onChange={click}
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary form-control" onClick={click1}>
          enviar
        </button>
      </div>
    </div>
  );
}

export default Mostrar;
