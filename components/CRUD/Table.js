import React from 'react'



const UserTable = (props) => (

  
  <table>
    <thead>
      <tr>
        <th>Name </th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>{
        props.users.map((user, index) => 
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>
          <button className="button muted-button" onClick={() => props.editRow(user)}>Edit</button>
          <button className="button muted-button" onClick={() => props.deletHandler(index)}>Delete</button>
        </td>
      </tr> )}
    </tbody>
  </table>
)

export default UserTable