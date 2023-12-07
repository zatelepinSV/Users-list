import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";
import './App.css';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList(prevList => {
      return [
        ...prevList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });

  };

  console.log(usersList)

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
