import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";

function ConsumApi() {
  const api = async () => {
    const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
    const data1 = await data.json();
    setdatos(data1.civilizations);
  };

  const [datos, setdatos] = useState([]);

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      {datos.map(dat => (
        <ul key={dat.id}>
          <li>
                <Link to={`/API/${dat.id}`}>
                     {dat.id} - {dat.name} - {dat.expansion} - {dat.army_type} 

                </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ConsumApi;
