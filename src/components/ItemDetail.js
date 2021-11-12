import React from "react";


export const ItemDetail =({producto})=>{

    return (
      <>
       <div className="card text-dark bg-info mb-3">
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body" >
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.precio}</p> 
              <p className="card-text">{producto.desc}</p>
            </div>
        </div>
      </>
    )
}