import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Civilization() {
  // console.log(useParams())
  const { id } = useParams();
  console.log(id);

 

  const [pueblo, setpuelo] = useState([]);

  useEffect(() => {
    const api = async () => {
        const data = await fetch(
          `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
        );
        const data1 = await data.json();
        setpuelo(data1);
      };
    api();
  }, [id]);

  return (
    <div>
      <h3>{pueblo.name}</h3>
      <p>{pueblo.civilization_bonus}</p>
    </div>
  );
}

export default Civilization;
