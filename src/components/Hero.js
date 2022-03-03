import React from "react";
import './Hero.css';

function Hero () {
    return(
        <div className="hero-container">
            <div className="text-container">
                <h1 className="hero-subtitle">¡Ya puedes ver el Resumen de nuestro ultimo partido!</h1>
                <p className="hero__text">¿Que estas esperando para verlo?</p>
                <a href="https://www.youtube.com/watch?v=3CAIRG-hAHw" className="hero-button">Ver Resumen</a>
            </div>
        </div>
    )
}

export default Hero;