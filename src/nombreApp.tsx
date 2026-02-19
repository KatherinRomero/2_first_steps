const name ='Katherin'
const lastName='Romero'

const isActive= false;

export const Mynombre=()=>{
    return(
        <>
       <h2>{name}</h2>
       <h3>{lastName}</h3>
       <h2>{isActive? 'Axctivo ':'No activo' }</h2>
        </>
    )
}