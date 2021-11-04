import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import itemListContainer from "../container/ItemListContainer";

const Home = () => {
    return ( 
     <>
        <Navbar/>
        <Carousel/>
        <itemListContainer/>

        <Layout>
            <div>
               *descargar  un icono de carrito 

               *crear el itemListContainer.js

            </div>
        </Layout>
     </>
  )                   
}

export default Home;