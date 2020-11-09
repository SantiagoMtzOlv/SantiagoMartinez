import React from 'react'
import { MdMailOutline } from "react-icons/md";
import Logo from '../img/mail.svg';
const Contact = () => {
    return (
        <div className="contenedor contact">
            <div className="image img-c">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="contacto">
                <div className="martisamo">
                    <h1><MdMailOutline /> martisamo@gmail.com</h1>
                </div>
                <div className="santaigo">
                    <h1><MdMailOutline /> santaigo.mtzolv@gmail.com</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
