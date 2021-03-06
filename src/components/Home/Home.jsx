import React from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.scss'

const Home= ({greeting}) => {
    return(
        <section className="home">
            <div>
            <h1>{greeting}</h1>
            <span>¡Nos alegra verte de nuevo!</span>
            <span>encontraras los mejores productos para el gaming aqui!</span>
            </div>
            <ItemListContainer/>
        </section>  
    )
}
export default Home