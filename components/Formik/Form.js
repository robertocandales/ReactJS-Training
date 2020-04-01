import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, errors, handleSubmit } = useForm();
  const [x, setx] = useState([]);

  const onSubmit = (data, e) => {
    console.log(e);
    console.log(data);
    setx([...x, data]);
    console.log(x);
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstname"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "titulo obligatorio" },
            maxLength: {
              value: 10,
              message: "No más de 5 carácteres!"
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres"
            }
          })}
        />
        {errors?.firstname?.message}
        <input
          name="lastname"
          className="form-control my-2"
          ref={register({
            required: { value: false, message: "titulo obligatorio" },
            maxLength: {
              value: 10,
              message: "No más de 5 carácteres!"
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres"
            }
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.lastname?.message}
        </span>
        <button className="btn btn-primary">Submit</button>
      </form>
      <div>
        {x.map((t, index) => (
          <h4 key={index}>
            {t.firstname} - {t.lastname}
          </h4>
        ))}
      </div>
    </Fragment>
  );
}

export default Form;
