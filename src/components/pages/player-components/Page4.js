import React from 'react';
import { alvarez, klaassen, klaiber, marteen, rensch } from './data';
import Profile from './Profile';
import Paginacion from './paginacion';
import Footer from "../../Footer";

export default function Page4() {
    return(
        <div>
            <Profile info={rensch} />
            <Profile info={alvarez} />
            <Profile info={marteen} />
            <Profile info={klaassen} />
            <Profile info={klaiber} />

            <Paginacion />
            <Footer />
        </div>
    )
} 