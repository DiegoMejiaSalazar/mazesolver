import React from 'react'
import classNames from "classnames";


function Modal({isOpen, children, title, onSubmit, onCancel}) {
    return <div className={`dialog ${classNames({
        'isOpen': isOpen
    })}`}>

    </div>
}

export default Modal
