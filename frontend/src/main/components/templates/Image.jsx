import React from "react"
import './Image.css'

const Image = function ({sourceImg}) {
    return (
        <img className="footer-img" src={sourceImg} alt={sourceImg}/>
    )
}

export default Image