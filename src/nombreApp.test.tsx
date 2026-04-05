
import {Mynombre}from './nombreApp';
import {describe, expect, test} from 'vitest';
import{render,screen}from'@testing-library/react'

describe('nombreApp',()=>{
test('should render firstName y lastName', () => {
const{container}=render(<Mynombre/>)//llama al componente y lo renderiza


//PRUEVA CON RENDER 
const h2= container.querySelector('h2')//querySelector seleciona por etiqueta
const h3= container.querySelector('h3')


expect(h2?.innerHTML).toContain('Katherin')//innerHTML devuelve el contenido de la etiqueta, con toContain verificamos que contenga ese texto
expect(h3?.innerHTML).toContain('Romero')


})
//PRUEVA CON SCREEN
test('should PRUEVA CON SCREEN', () => {
  render(<Mynombre/>)
  const h2= screen.getByRole('heading',{level:2})// getByRole busca por el rol de la etiqueta.
  const apellido= screen.getByTestId('apellido')

  expect(h2?.innerHTML).toContain('Katherin')
  expect(apellido?.innerHTML).toContain('Romero')
})

test('should match snapshot', () => {//snapshot es una forma de guardar el estado actual del componente y compararlo con futuras ejecuciones para detectar cambios inesperados.
  const { container } = render(<Mynombre />);
  expect(container).toMatchSnapshot();
});

})
