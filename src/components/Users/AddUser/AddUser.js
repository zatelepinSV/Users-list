import { useState } from "react";

export const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('add user');
    onAddUser(userName, userAge);
  }

  const onChangeName = (event) => {
    setUserName(event.target.value);
  }

  const onChangeAge = (event) => {
    setUserAge(event.target.value);
  }

  return (
    <>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type='text' id='username' value={userName} onChange={onChangeName}/>
        <label htmlFor="age">Age (Years)</label>
        <input type='number' id='age' value={userAge} onChange={onChangeAge}/>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};