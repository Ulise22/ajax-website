import React from "react";
import { Link } from "react-router-dom";
import './paginacion.css'

export default function Paginacion(){
    return (
        <div className="container">
           <div className="pag__display">
            <Link to="/players"><button>1</button></Link>
            <Link to="/players/page2"><button>2</button></Link>
            <Link to="/players/page3"><button>3</button></Link>
            <Link to="/players/page4"><button>4</button></Link>
            <Link to="/players/page5"><button>5</button></Link>
           </div>
        </div>
    );
}