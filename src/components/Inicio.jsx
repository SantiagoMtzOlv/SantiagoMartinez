import React from 'react'
import Logo from '../img/logo.svg';
const Inicio = () => {
    return (
        <div className="contenedor inicio">
            <div className="nombre">
                <h1>Santiago Martínez</h1>
                <span>Ing. Sistemas Computacionales</span>
            </div>
            <div className="image">
                <img src={Logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Inicio
