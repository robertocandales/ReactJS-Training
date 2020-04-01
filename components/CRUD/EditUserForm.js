import React, { useState, useEffect } from "react";

  

const EditUserForm = props => {
    console.log(props.currentUser)
  const [addUser, setaddUser] = useState(props.currentUser);

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
  useEffect(
    () => {
        setaddUser(props.currentUser)
    },
    [ props ]
  )

  return (
    <form onSubmit={click1}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={addUserHandler}
       value={addUser.name}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={addUserHandler}
       value={addUser.username}
      />
      <button>Edit User</button>
      <button onClick={() => props.seteditUser(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
