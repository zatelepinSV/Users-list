import { Card } from "../../UI/Card";
import classes from "./UsersList.module.css";
import { Button } from "../../UI/Button";

export const UsersList = ({users, onDelete}) => (
  <Card className={classes.users}>
    <ul>
      {users.map(user => <li
        key={user.id}
      >{user.name} ({user.age} years old)
        <Button onClick={() => onDelete(user.id)}>Delete</Button>
      </li>)}
    </ul>
  </Card>
);