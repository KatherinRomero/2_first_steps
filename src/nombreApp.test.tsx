
import {Mynombre}from './nombreApp';
import {describe, test} from 'vitest';
import{render,screen}from'@testing-library/react'

describe('nombreApp',()=>{
test('should render firstName y lastName', () => {
render(<Mynombre/>)
screen.debug()
})

})
