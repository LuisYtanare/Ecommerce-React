import React from "react";
import { useState } from "react/cjs/react.development";
import { ItemDetail } from "./ItemDetail";

const ItemCount = (props) =>{
    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if (stock===0) {
                alert('no hay mas stock')
            }else{
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if (unidades===0) {
                alert('no puedes selleccionar menos de 0')
            }else{
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return(
        <div className="addcarts">
                <div className="botonesadd">
                    <button onClick={handleStock.restaStock} className="btn btn-outline-dark">-</button>
                    <p>{unidades}</p>
                    <button onClick= {handleStock.sumaStock} className="btn btn-outline-dark">+</button>
                </div>
                
                <div>
                    <p>Stock dispible {stock}</p>
                </div>
                <div>
                    <button onClick={()=>props.onAdd({unidades})} className="btn btn-outline-success">Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemCount