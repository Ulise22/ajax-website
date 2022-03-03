import React from "react";
import { pasveer, gorter, berghuis, blind, tadic } from "./player-components/data";
import Profile from './player-components/Profile';
import Paginacion from "./player-components/paginacion";
import Footer from "../Footer";

const Players = () => {
    return (
        <div>
            <Profile info={pasveer} /> 
            <Profile info={gorter} /> 
            <Profile info={berghuis} />
            <Profile info={blind} />
            <Profile info={tadic} />

            <Paginacion />
            <Footer />
        </div>
    )
}

export default Players;