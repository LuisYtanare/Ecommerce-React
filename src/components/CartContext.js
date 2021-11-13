 import react, { useState } from "react";

 const Context = react.CartContext()

 const CartFuncion = ({chlindren}) => {
     const [cart, setCart] = useState({})
     const [unidades, setUnidades] = useState(0)
     const [total, setTotal] =useState(0)



     return <Context.Provider value={{cart, unidades, total}}>
     {chlindren}
     </Context.Provider>
 }

 export {CartFuncion, Context}