import { ItemCounter } from "./shoping-cart/itemCounter";

interface ItemInCar{// interfas para definir el tipo de objeto que se va a usar en el carrito de compras
producname:string,
count:number
}

const ItemInCar:ItemInCar[]=[// array de objetos que representan los productos en el carrito de compras
     {producname:"Nintendo Shich", count:2},
     {producname:"iphone14", count:1},
     {producname:"ipad", count:0},
]


export function FirstStepApp(){
   
    return(
        <>
        /*<h1>Carrito de compras </h1>
        {ItemInCar.map(({producname,count})=>(// map para iterar sobre el array
            <ItemCounter key={producname} nameProducto={producname} count={count}/>//imprime el componente ItemCounter con las props 
        ))}
       
        {/*<ItemCounter nameProducto="Nintendo Shich" count={2}/>
        <ItemCounter nameProducto="iphone 15" count={2}/>
        <ItemCounter nameProducto="iphone 12"count={0} />*/}
        </>
    )
}

