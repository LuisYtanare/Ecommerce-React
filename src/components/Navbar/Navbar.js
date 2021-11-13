import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="app-navbar">
            <div className="navbar-img">
                <Link class="nav-link" to="/"><img src="/image/Logo.png"/></Link>
                <Link class="nav-link" to="/"><h1>Gameshops</h1></Link>
                <Link class="nav-link" to="/cart"><img src="/image/ShopingCart.png"/></Link>
                
            </div>

            <div class="navbar-nav">
                <Link class="nav-link" to="/category/pc">Componentes para PC</Link>
                <Link class="nav-link" to="/category/consola">Componentes para consolas</Link>
                <Link class="nav-link" to="/category/accesorio">Accesorios de telefonos</Link>
            </div>
        </div>
    )
}

export default Navbar
