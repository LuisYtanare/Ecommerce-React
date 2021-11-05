import React from "react";
import ItemList from "./ItemList";

const Item = (nombre, desc, precio) =>{
    return(
        <div>
            <h2>{nombre}</h2>
            <h2>{desc}</h2>
            <h2>{precio}</h2>
        </div>
    )
}

export default Item