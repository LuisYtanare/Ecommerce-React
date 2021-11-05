import React from 'react'
import Logo from '../assets/img/Logo.png'
import CartWidget from './CartWidget'


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
                    <a className="nav-link" href="#">acerca de la tienda</a>
                    <a className="nav-link" href="#">Productos</a>
                    <a className="nav-link" href="#">Contactanos</a>
                </div>
              </div>
            </div>
          </nav>
      </header>

    </div>
  )
}


export default Navbar;