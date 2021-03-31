import React from 'react'
import style from './style.module.css'


function NavigationBar({children}) {
    return <nav className={style.component}>
        {children}
    </nav>
}

export default NavigationBar
