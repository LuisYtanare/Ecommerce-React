import React from 'react'
import ShopingCart from '../assets/img/ShopingCart.png'

const CartWidget = (props) =>{
    return (
        <div>
            <a href="#"><img height="48px" src={ShopingCart}></img></a>
        </div>
    )
}

export default CartWidget
