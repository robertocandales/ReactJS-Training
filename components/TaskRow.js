import React from "react";

export default function TaskRow(props) {
  return (
    <tr key={props.e.name}>
      <td>{props.e.name}</td>

      <td>
        <input type="checkbox" checked={props.e.done} onChange={() => props.toggleTask(props.e)} />
      </td>
    </tr>
  );
}
