import React, { useState } from "react";
import Table from "./Table";
import AddUserForm from "./AddUser";
import EditUserForm from "./EditUserForm";
//import { Router } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import ConsumApi from "./ConsumApi";
import Civilization from "./Civilization";

function CRUDapp() {
  //editar usuario
  const [editUser, seteditUser] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: null,
    name: "",
    username: ""
  });

  const editRow = user => {
    seteditUser(true);
    setcurrentUser({
      id: user.index,
      name: user.name,
      username: user.username
    });
  };

  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);

  const adduser1 = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    // console.log(user)
  };

  // Eliminar
  const deletHandler = id => {
    //console.log(id)
    //console.log(users.index)
    setUsers(users.filter((t, index) => index !== id));
  };

  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route path="/API/:id">
          <Civilization />
        </Route>
        <Route path="/contactos">
          Esta es la seccion para la pagina de Contacto
        </Route>

        <Route path="/seccionx">Esta es para realizar otra seccion</Route>
        <Route path="/API/">
          <ConsumApi />
        </Route>
        <Route path="/">
          <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
              {editUser === false ? (
                <div className="flex-large">
                  <h2>Add user</h2>
                  <AddUserForm usersData={usersData} adduser1={adduser1} />
                </div>
              ) : (
                <div className="flex-large">
                  <h2>Edit User</h2>
                  <EditUserForm
                    usersData={usersData}
                    adduser1={adduser1}
                    currentUser={currentUser}
                    seteditUser={seteditUser}
                  />
                </div>
              )}
              <div className="flex-large">
                <h2>View users</h2>
                <Table
                  users={users}
                  deletHandler={deletHandler}
                  editRow={editRow}
                />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default CRUDapp;
