import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
    return ( 
     <>
        <Navbar/>
        <ItemListContainer titulo="Ve aqui los mejores productos"/>

        <Layout>
            <div>
               *descargar  un icono de carrito 

               *crear el itemListContainer.js

            </div>
        </Layout>
        <Carousel/>
     </>
  )                   
}

export default Home;