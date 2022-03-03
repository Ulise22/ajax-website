import React from "react";
import Footer from "../Footer";
import Fundation from "./blog-components/Fundation";
import LastChampions from "./blog-components/LastChampions";
import Total from "./blog-components/Total";

const Blog = () => {
    return(
        <React.Fragment>
            <div>
                <Fundation />
                <Total />
                <LastChampions />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Blog;