import React from 'react';
import { danilo, daramy, haller, kudus } from './data';
import Profile from './Profile';
import Paginacion from './paginacion';
import Footer from "../../Footer";

export default function Page5() {
    return(
        <div>
            <Profile info={kudus} />
            <Profile info={haller} />
            <Profile info={daramy} />
            <Profile info={danilo} />

            <Paginacion />
            <Footer />
        </div>
    )
} 