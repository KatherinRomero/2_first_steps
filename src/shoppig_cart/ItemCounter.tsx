import React from 'react'

export const ItemCounter = () => {
  return (
<section style={{
    display:'flex',
    alignContent:'center',
    gap:10,//grap es el espacio entre los elementos
    marginTop:10
}}>
     <samp >producto</samp>
     <button>+1</button>
     <samp>0</samp>
     <button>-1</button>
</section>
  )
}

