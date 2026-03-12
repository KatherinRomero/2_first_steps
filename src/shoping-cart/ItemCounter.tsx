interface Props{
    nameProducto:String,
    count ?:number
}



export const ItemCounter = ({nameProducto,count}:Props) => {
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
      <button>+1</button>
      <span>{count}</span> {/* La etiqueta span se usa para textos pequeños para editarlos mas fácilmente */}
      <button>-1</button>
    </section>
  )
}
