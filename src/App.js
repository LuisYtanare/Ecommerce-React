import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget/CartWidget';


function App() {
  return (
    <BrowserRouter>

         <Navbar/> 

         <Switch>
           <Route exact path="/">
            <ItemListContainer titulo={'Venta de equipos'}/>
           </Route>

           <Route exact path="/category/:categoryId">
            <ItemListContainer titulo={'Venta de equipos'}/>
           </Route>

           <Route exact path="/CartShoping">
             <p>Carrito de compras</p>
           </Route>

           <Route exact path="/item/:id">
             <ItemDetailContainer/>
           </Route>

           <Route exact path="*">
            <p>- Error 404 no se encontro la pagina</p>
           </Route>


         </Switch>

         <Carousel/> 

    </BrowserRouter>
  )
}

export default App