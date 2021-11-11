import React from "react";

export const ItemDetail =({id, nombre, precio , imagen, desc})=>{

    return !id ? (
      <h1>Producto no disponible</h1>
    ) : (
      <>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}/>
        <p>{precio}</p> 
        <p>{desc}</p>
      </>
    )
}