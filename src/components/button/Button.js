import React, { Component } from 'react';

const Button = ({ btnClassName, onBtnClick, btnTitle }) => {
    
    const className = 'btn ' + btnClassName;

    return (
        <button className={className} onClick={onBtnClick} >{btnTitle}</button>
    );
}

export default Button;