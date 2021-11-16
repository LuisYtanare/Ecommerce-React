import {useContext} from "react";
import { Context } from "./CartContext";

export const Cart = ()=>{
    const {cart, total} = useContext(Context)

    return(
        <>
        <div className="cartp">

          <h3>El total del el carrito es </h3>
          <h2>{total} $ </h2>

        </div>
        </>
    )
}

export default Cart