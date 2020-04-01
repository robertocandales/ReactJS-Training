import React from "react";

export default function VisibilityControl(props) {
  return (
    <div className="form-chek">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isCheked}
        onChange={e => props.callback(e.target.checked)}
      />

      <label htmlFor="form-check-label">
        {props.description} 
      </label>
    </div>
  );
}
