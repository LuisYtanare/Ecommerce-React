import React from 'react';
import './quienes.scss'

const Quienes = () => {
    return(
        <>
        <section className="quienes">
            <p> <span>GamingShops</span> es una tienda donde conseguiras lo mejor en productos para el gaming desde lo mejor en consolas y accesorios entre otros.</p>
        </section>

        <div className="conts">

        <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <img src="/img/slider.jpg" class="d-block w-100" alt="Imagen computador gamers"/>
                  <div class="carousel-caption d-none d-md-block">
                     <h5>Lo Mejor en computadores</h5>
                     <p>Aqui encontraras una gran variedad de productos a tu preferencia</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img src="/img/slider1.jpg" class="d-block w-100" alt="Imagen computador gamers"/>
                  <div class="carousel-caption d-none d-md-block">
                     <h5>Productos de consolas</h5>
                     <p>Con los mejores accesorios y controles personaliazdos que tanto deseas</p>
                  </div>
               </div>

               <div class="carousel-item">
                  <img src="/img/slider2.jpg" class="d-block w-100" alt="Imagen computador gamers"/>
                   <div class="carousel-caption d-none d-md-block">
                     <h5>Con los mejores accesorios</h5>
                     <p>Si eres jugador de Smartphone no hay problema aqui estan los mejores case adaptables</p>
                  </div>
               </div>

              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>

            </div>
       </div>
        </div>

        </>
    )
}
export default Quienes;