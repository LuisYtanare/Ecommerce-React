import ItemCount from "./ItemCount";
import React, {useState} from "react";
import { Link } from "react-router-dom";



export const ItemDetail =({producto})=>{
  
     const[buy, setBuy] = useState(false)

     const agregar = (props) =>{
       setBuy(true)
       alert(`agregaste ${props.unidades} al carrito`)
    }


    return (
      <>
       <div className="card text-dark bg-info mb-3">
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body" >
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.precio}</p> 
              <p className="card-text">{producto.desc}</p>
              {!buy ? <ItemCount stock={producto.stock} onAdd={agregar}/> : <Link to='/CartShoping'><button className="btn btn-outline-success">Terminar compra</button></Link>}
            </div>
        </div>
      </>
    )
}