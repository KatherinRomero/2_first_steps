import{expect, test} from'vitest'
import{add} from'./math.helpers'
test('descripcion de la prueva ',()=>{
   const result = add(1,3)//llamamos a la funcion que queremos probar
    expect(result).toBe(4)//comparamos el resultado con el valor esperado
    //expect funciona como un comparador, recibe el resultado de la funcion y luego usamos toBe para comparar con el valor esperado
})
