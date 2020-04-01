import React, { useState } from "react";

const AddUserForm = props => {
  const [addUser, setaddUser] = useState('');

  const addUserHandler = e => {
    const { name, value } = e.target;
   // console.log(e.target.name)
   // console.log(e.target.value)
   // console.log(addUser)
    setaddUser({...addUser, [name]: value });
   // setaddUser({name:e.target.vlue, username:e.target.username})
  };

  const click1 = e => {
    e.preventDefault();
    props.adduser1(addUser);
    
    
  };

  return (
    <form onSubmit={click1}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={addUserHandler}
       // value={addUser.name}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={addUserHandler}
       //value={addUser.username}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
