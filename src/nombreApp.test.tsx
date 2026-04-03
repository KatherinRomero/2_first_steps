
import {Mynombre}from './nombreApp';
import {describe, expect, test} from 'vitest';
import{render,screen}from'@testing-library/react'

describe('nombreApp',()=>{
test('should render firstName y lastName', () => {
const{container}=render(<Mynombre/>)


//PRUEVA CON RENDER 
const h2= container.querySelector('h2')
const h3= container.querySelector('h3')


expect(h2?.innerHTML).toContain('Katherin')
expect(h3?.innerHTML).toContain('Romero')


})
//PRUEVA CON SCREEN
test('should PRUEVA CON SCREEN', () => {
  render(<Mynombre/>)
  const h2= screen.getByRole('heading',{level:2})
  const apellido= screen.getByTestId('apellido')

  expect(h2?.innerHTML).toContain('Katherin')
  expect(apellido?.innerHTML).toContain('Romero')
})

})
