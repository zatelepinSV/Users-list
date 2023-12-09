import { Card } from "../Card";
import { Button } from "../Button";
import { createPortal } from "react-dom";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm}/>
};

const ModalOverlay = ({title, onConfirm, message}) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

export const ErrorModal = ({title, onConfirm, message}) => (
  <>
    {createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
    {createPortal(<ModalOverlay
      onConfirm={onConfirm}
      title={title}
      message={message}/>
      , document.getElementById('overlay-root'))
    }
  </>
);