import { ItemCounter } from "./shoping-cart/itemCounter";

interface ItemInCar{
producname:string,
count:number
}

const ItemInCar:ItemInCar[]=[
     {producname:"Nintendo Shich", count:2},
     {producname:"iphone14", count:1},
     {producname:"ipad", count:1},
]


export function FirstStepApp(){
   
    return(
        <>
        /*<h1>Carrito de compras </h1>
        {ItemInCar.map(({producname,count})=>(
            <ItemCounter key={producname} nameProducto={producname} count={count}/>
        ))}
       
        {/*<ItemCounter nameProducto="Nintendo Shich" count={2}/>
        <ItemCounter nameProducto="iphone 15" count={2}/>
        <ItemCounter nameProducto="iphone 12"count={0} />*/}
        </>
    )
}

