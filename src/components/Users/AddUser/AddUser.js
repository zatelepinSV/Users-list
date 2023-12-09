import { useState, useRef } from "react";
import { Card } from "../../UI/Card";
import { ErrorModal } from "../../UI/ErrorModal";
import { Button } from "../../UI/Button";
import classes from "./AddUser.module.css";

export const AddUser = ({ onAddUser, users }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    for (const item of users) {
      if (item.name === enteredName) {
        setError({
          title: 'Invalid Name',
          message: 'A user with that name already exists',
        });
        return;
      }
    }

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input ref={nameInputRef} type='text' id='username' />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} type='number' id='age' />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};