import classes from "./Button.module.css";

export const Button = ({type, onClick, children}) => (
  <button
    className={classes.button}
    type={type || 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);