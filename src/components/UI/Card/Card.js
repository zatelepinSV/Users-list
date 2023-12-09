import classes from "./Card.module.css";

export const Card = ({ className, children }) => (
  <div className={`${classes.card} ${className}`}>{children}</div>
);