import { ItemCounter } from "./shoping-cart/itemCounter";


export function FirstStepApp(){
   
    return(
        <>
        <h1>Carrito de compras </h1>
        <ItemCounter nameProducto="Nintendo Shich" count={2}/>
        <ItemCounter nameProducto="iphone 15" count={2}/>
        <ItemCounter nameProducto="iphone 12"count={0} />
        </>
    )
}

