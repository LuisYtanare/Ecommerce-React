import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


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

           <Route exact="/item/:id">
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