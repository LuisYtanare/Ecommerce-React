import react, {useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "../data/data";

export const ItemDetailContainer= () => {

    // parte 1

    const [producto, setProducto] = useState({})
    const {id} = useParams()

        useEffect(() =>{
        const listaDeProductos=new Promise((resolve) => {
            setTimeout(()=>{
                resolve(data)
            },1000)
        })
        listaDeProductos.then((res)=>{
            setProducto(res.find((i) => i.id === id));
        })
    },[id])

    return <ItemDetail producto={producto}/>
}
        
    // fin 1

export default ItemDetailContainer
