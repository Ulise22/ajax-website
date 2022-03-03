import React from "react";
import Hero from "./../Hero";
import History from "../History";
import Stadium from "../Stadium";
import Footer from "../Footer";

const Home = () => {
    return(
        <React.Fragment>
            <Hero />
            <History />
            <Stadium />
            <Footer />
        </React.Fragment>
    )
}

export default Home;