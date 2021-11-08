import React, {useState, useEffect} from 'react'
import data  from '../../../data/data'
import ItemList from './ItemList/ItemList'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const listaDeProductos=new Promise((res, rej)=>{
            setTimeout(()=>{
                res(data)
            },2000)
        })
        listaDeProductos.then((data)=>{
            setProductos(data)
            setCargando(false)
        })
    },[])

    return (
        <>
         <h1 className="titulos">{props.titulo}</h1>
        <div className="princ">
            {cargando ? <img src="/image/cargando.gif" height="48px" /> : <ItemList productos={productos}/>}
        </div>
        </>
    )
}

export default ItemListContainer
