import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
    return <div onClick = {props.onHideCart} className = {classes.backdrop}/>;
}

const ModalOverlay = (props) => {
    return (
        <div className = {classes.modal}>
            <div className = {classes.content}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart = {props.onHideCart}/>, document.getElementById("overlay"))}
            {ReactDom.createPortal(<ModalOverlay children = {props.children}/>, document.getElementById("overlay"))}
        </Fragment>
    );
}
export default Modal;