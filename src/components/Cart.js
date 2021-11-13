import {useContext} from "react";
import { Context } from "./CartContext";

export const Cart = ()=>{
    const {cart, total} = useContext(Context)

    return(
        <p>El total del el carrito es {total}</p>
    )
}

export default Cart