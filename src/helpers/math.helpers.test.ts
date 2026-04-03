import{describe, expect, test} from'vitest'
import{add,subtract,multiply,divide} from'./math.helpers'



test('descripcion de la prueva ',()=>{
   const result = add(1,3)//llamamos a la funcion que queremos probar
    expect(result).toBe(4)//comparamos el resultado con el valor esperado
    //expect funciona como un comparador, recibe el resultado de la funcion y luego usamos toBe para comparar con el valor esperado
})


describe('subtract', () => { //agrupamos las pruebas
 test('resta correctamente ', () => {
    const a=3
    const b=5

    const result = subtract(a,b)
    expect(result).toBe(0)
    
 })

test('resta negativa',()=>{
const a=3
    const b=5

    const result = subtract(a,b)
     expect(result).toBeLessThan(0)//toBeLessThan  compara si el resultado es menor que el valor esperado 
 })
    
})


describe('multiply',()=>{
test('multipkicacion por 0 ', () => {
  const result= multiply(0,3)
  expect(result).toBe(0)
})

test('multiplicar por -', () => {//mejor forma de escribir el test 
  expect(multiply(-2,-5)).toBe(10)
})

})


