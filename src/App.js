import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div className="contenedor">
      <Navbar/> 
      <ItemListContainer titulo='Venta de equipos de juegos'/>
      <Carousel/>
    </div>
  )
}

export default App



