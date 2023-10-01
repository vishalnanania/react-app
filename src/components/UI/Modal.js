import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    );
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalEle = document.getElementById('overlays');

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEle)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEle)}
        </React.Fragment>
    );
};

export default Modal;