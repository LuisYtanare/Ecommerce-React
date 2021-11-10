import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <div className="app-navbar">
            <div className="navbar-img">
                <img src="/image/Logo.png"/>
                <h1>Gameshops</h1>
                <CartWidget cart={'Logo'}/>
            </div>

            <div class="navbar-nav">
                <a class="nav-link" href="#">Componentes para PC</a>
                <a class="nav-link" href="#">Componentes para consolas</a>
                <a class="nav-link" href="#">Accesorios de telefonos</a>
            </div>

            
        </div>
    )
}

export default Navbar
