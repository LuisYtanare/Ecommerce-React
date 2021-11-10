import React, {useState, useEffect} from 'react';
import data  from '../../../data/data';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Item from './ItemList/Item/Item';


const ItemListContainer = (props) => {

    

    // parte 1

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoryId} = useParams()

        useEffect(() =>{
        setCargando(true)
        const listaDeProductos=new Promise((res, rej)=>{
            setTimeout(()=>{
                res(data)
            },1000)
        })
        listaDeProductos.then((data)=>{
            categoryId 
            ? setProductos(data.filter((i) => i.category === categoryId)) 
            :
            setProductos(data)
            setCargando(false)
        })
    },[categoryId])

    return (
        <>
         <h1 className="titulos">{props.titulo}</h1>
          <div className="princ">
             {cargando ? <img src="/image/cargando.gif" height="48px" /> : <ItemList productos={productos}/>}
          </div>
        </>
    )
}
        
    // fin 1

export default ItemListContainer
