import React, { useState } from "react";

export default function TaskCreator(props) {
  const [newTaskName, setnewTaskName] = useState("");

  const update = e => {
    setnewTaskName(e.target.value);
    
  };

  const createNewTask = () => {
    props.callback(newTaskName)
    setnewTaskName("");
  };

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={update}
      />

      <button className="btn btn-primary mt-1 " onClick={createNewTask}>
        Add
      </button>
    </div>
  );
}
