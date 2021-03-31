import React from 'react'
import style from './style.module.css'

function Button({text, onClick, isDisabled}) {
    return <button className={style.container} disabled={isDisabled} onClick={onClick}>{text}</button>
}

export default Button;
