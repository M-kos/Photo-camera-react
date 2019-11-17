import React from 'react';
import './Button.css';

const Button = ({ btnClassName, onBtnClick, btnTitle }) => {
    
    const className = 'btn ' + btnClassName;

    return (
        <button className={className} onClick={onBtnClick} >{btnTitle}</button>
    );
}

export default Button;