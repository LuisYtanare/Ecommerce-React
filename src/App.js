import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Router, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
         <Navbar/> 
         <ItemListContainer titulo='Venta de equipos'/>
         <Carousel/>
    </BrowserRouter>
  )
}
{/* <div className="contenedor">
</div> */}

export default App

