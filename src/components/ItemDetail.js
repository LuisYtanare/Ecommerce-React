import React from "react";


export const ItemDetail =({producto})=>{

    return (
      <>
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen} alt={producto.nombre}/>
        <p>{producto.precio}</p> 
        <p>{producto.desc}</p>
      </>
    )
}