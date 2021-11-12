import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre , desc, precio, imagen}) => {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text">{precio}</p>
               <Link to={`/item/$ {id}`} className="btn btn-primary">Mas detalles</Link>
              <img className="imagen-des" src={imagen} alt={nombre} />
            </div>
        </div> 
    )
}

export default Item
