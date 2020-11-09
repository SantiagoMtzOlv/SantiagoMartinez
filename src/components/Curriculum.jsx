import React from 'react'
import Cv from '../cv.pdf'
const Curriculum = () => {
    return (
        <div className="contenedor">
            <iframe src={Cv} frameborder="0"></iframe>
        </div>
    )
}

export default Curriculum
