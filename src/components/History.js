import React from "react";
import { Link } from "react-router-dom";
import  "../App.css";
import './History.css'

function History () {
    return (
        <div className="container">
            <div className="history__container">
                <img src="https://logodownload.org/wp-content/uploads/2018/09/ajax-logo-escudo.png" className="history__image" />
                <h2 className="history__subtitle">Ajax de Ámsterdam</h2>
                <p>El Ajax de Ámsterdam​, o conocido simplemente como Ajax, es un club de fútbol con sede en Ámsterdam, Países Bajos. Fue fundado en 1900 —si bien sus orígenes datan al año 1894 bajo la denominación de Foot-ball Club Ajax— y juega en la máxima categoría del país, la Eredivisie, desde los primeros años de la competición.</p>
                <Link to="/blog" className="history__button">Más Información</Link>
            </div>
        </div>
    )
}

export default History;