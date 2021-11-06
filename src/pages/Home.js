import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import ItemListContainer from "../components/ItemListContainer";
import { Browser, Switch, Route, BrowserRouter} from 'react-router-dom';

const Home = () => {
    return ( 
     <>
     <BrowserRouter>
        <Navbar/>

        <Switch>
           <Route exact path="/miruta">
               
             <ItemListContainer titulo="Ve aqui los mejores productos"/>

           </Route>

           <Route path="/category">
             <h2>Producto</h2>
             </Route> 
        </Switch>   
        <Layout>
            <div>
            </div>
        </Layout>
        <Carousel/>
      </BrowserRouter>
     </>
  )                   
}

export default Home;