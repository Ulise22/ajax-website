import React from 'react';
import { antony, onana, tagliafico, taylor, timber } from './data';
import Profile from './Profile';
import Paginacion from './paginacion';
import Footer from "../../Footer";

export default function Page3() {
    return(
        <div>
            <Profile info={tagliafico} />
            <Profile info={onana} />
            <Profile info={timber} />
            <Profile info={taylor} />
            <Profile info={antony} />

            <Paginacion />
            <Footer />
        </div>
    )
} 