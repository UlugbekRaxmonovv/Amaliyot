import React from 'react';
import './Modal.scss'

const Modal = ({btn1,children}) => {
    return (
       <>
        <div className="overlay" onClick={() =>btn1(false)}></div>
        <div className="modul" >
        {children}
        </div>
       </>
    );
}

export default Modal;
