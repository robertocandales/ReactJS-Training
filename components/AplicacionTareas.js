import React, { useState } from "react";
import TaskRow from "./TaskRow";
import TaskBanner from "./TaskBanner";
import TaskCreator from "./TaskCreator";
import VisibilityControl from "./VisibilityControl";

function AplicacionTareas() {
  const [username, usernameState] = useState("Robertito");

  const [taskItem, setTaskItem] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false }
  ]);

  const [showCopleted, setshowCopleted] = useState(true);

  const nuevaTarea = nombre => {
    if (!taskItem.find(t => t.name === nombre)) {
      setTaskItem([...taskItem, { name: nombre, done: false }]);
    }
  };

  const toggleTask = e => {
    setTaskItem(
      taskItem.map(t => (t.name === e.name ? { ...t, done: !t.done } : t))
    );
  };

  const taskArrow = (doneValue) => {
    return taskItem
    .filter(task => task.done === doneValue)
    .map(e => (
      <TaskRow e={e} key={e.name} toggleTask={toggleTask} />
    ));
  };

  return (
    <div>
      <TaskBanner username={username} taskItem={taskItem} />

      <TaskCreator callback={nuevaTarea} />
      <table className="table table-striped table bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskArrow(false)}</tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Task"
          ischecked={showCopleted}
          callback={checked => setshowCopleted(checked)}
        />
      </div>

        {
            showCopleted && (
                <table className="table table-stripe table-bordered">

                    <thead>
                    <th>
                        <th>Descrtiption</th>
                        <th>Done</th>
                    </th>
                    </thead>
                    <tbody>
                        {taskArrow(true)}
                    </tbody>
                </table>
            )
        }

    </div>
  );
}

export default AplicacionTareas;
