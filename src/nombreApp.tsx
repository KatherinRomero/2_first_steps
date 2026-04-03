const name ='Katherin'
const lastName='Romero'

const isActive= false;

export const Mynombre=()=>{
    return(
        <>
       <h2>{name}</h2>
      <h3 data-testid="apellido">Romero</h3>
       <h3>{isActive? 'Axctivo ':'No activo' }</h3>
        </>
    )
}