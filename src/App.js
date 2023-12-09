import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

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

  const deleteUserHandler = (userId) => {
    setUsersList(prevList => {
      return [
        ...prevList.filter(item => item.id !== userId)
      ]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} users={usersList} />
      {usersList.length > 0 && <UsersList users={usersList} onDelete={deleteUserHandler} />}
    </div>
  );
};

export default App;