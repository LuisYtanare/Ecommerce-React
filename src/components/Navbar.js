import React from 'react'
import Logo from '../assets/img/Logo.png'
import CartWidget from './CartWidget'
import { NavLink, link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className= "contenedor">
      <header>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <img src={Logo} alt="Logo de juegos" height="48px"/>
                <h2 className="nav-link">GamingShop</h2>
                <CartWidget nombre={'logo'}/>
                <button className="navbar-toggler btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Navlink className="nav-link" to="#">acerca de la tienda</Navlink>
                    <Navlink className="nav-link" to="#">Productos</Navlink>
                    <Navlink className="nav-link" to="#">Contactanos</Navlink>
                </div>
              </div>
            </div>
          </nav>
      </header>

    </div>
  )
}


export default Navbar;