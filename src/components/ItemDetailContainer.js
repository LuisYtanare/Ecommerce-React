import react, {useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "../data/data";

export const ItemDetailContainer= () => {

    // parte 1

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] =useState(true)
    const {id} = useParams()

        useEffect(() =>{
        const listaDeProductos=new Promise((resolve) => {
            setTimeout(()=>{
                resolve(data)
            },1000)
        })
        listaDeProductos.then((res)=>{
            console.log(res)
            console.log(id)
            setProducto(res.find((i) => i.id === id));
            setCargando(false)
            console.log(producto)
        })
    },[])

    return (
        <div className="princ2">
        {cargando ? <img src="/image/cargando.gif" height="48px" /> : <ItemDetail producto={producto}/>}
        </div>
    )
}
        
    // fin 1

export default ItemDetailContainer
