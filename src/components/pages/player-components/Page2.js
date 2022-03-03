import React from 'react';
import { gravenber, labyad, martinez, mazraoui, schuurs } from './data';
import Profile from './Profile';
import Paginacion from './paginacion';
import Footer from "../../Footer";

export default function Page2() {
    return(
        <div>
            <Profile info={martinez} />
            <Profile info={gravenber} />
            <Profile info={labyad} />
            <Profile info={mazraoui} />
            <Profile info={schuurs} />

            <Paginacion />
            <Footer />
        </div>
    )
} 