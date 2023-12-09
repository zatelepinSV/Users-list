import { useState } from "react";
import { Card } from "../../UI/Card";
import { ErrorModal } from "../../UI/ErrorModal";
import { Button } from "../../UI/Button";
import classes from "./AddUser.module.css";

export const AddUser = ({ onAddUser, users }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
      for (const item of users) {
        if (item.name === userName) {
          setError({
            title: 'Invalid Name',
            message: 'A user with that name already exists',
          });
          return;
        }
      }

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  }

  const onChangeName = (event) => {
    setUserName(event.target.value);
  }

  const onChangeAge = (event) => {
    setUserAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type='text' id='username' value={userName} onChange={onChangeName}/>
          <label htmlFor="age">Age (Years)</label>
          <input type='number' id='age' value={userAge} onChange={onChangeAge}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};