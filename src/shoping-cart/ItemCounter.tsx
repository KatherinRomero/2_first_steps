import { useState } from "react"

interface Props{
    nameProducto:String,
    
}



export const ItemCounter = ({nameProducto,}:Props) => {
const[quantity,setcount] =useState(0) // se está inicializando el estado quantity con el valor 10. La función setcount se utiliza para actualizar el valor de quantity cuando sea necesario.
 
const handleAdd=()=>{//  Dentro de esta función, se utiliza setcount para actualizar el estado quantity incrementándolo en 1 cada vez que se hace clic.
setcount(quantity+1)
}

const handlSumit=()=>{
  if(quantity== 0)return//  Si quantity es igual a 1, la función retorna sin hacer nada, lo que evita que el contador baje de 1.
setcount(quantity-1)
}


  const handleClick=()=>{
  console.log(`click en ${nameProducto}`)
}
  return (
    <section style={{
        display:'flex',/* display flex para alinear elementos horizontalmente */
        alignItems: 'center',
        gap:10,/* gap para el espacio entre elementos */
        marginTop:10,
    }}>
      <span style={{
        width:65
      }}>{nameProducto}</span>
      <button
      onClick={handleAdd}
      >+1</button>
      <span>{quantity}</span> {/* La etiqueta span se usa para textos pequeños para editarlos mas fácilmente */}
      <button onClick={handlSumit}
      >-1</button>
    </section>
  )
}
