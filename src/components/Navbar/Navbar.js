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

            <div className="navbar-menu">
                <p>opcion 1</p>
                <p>Opcion 2</p>
                <p>Opcion 3</p>
            </div>

            
        </div>
    )
}

export default Navbar
