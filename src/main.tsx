import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './FirstStepApp'
import { Mynombre } from './nombreApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <FirstStepApp/>
   
   {/*<Mynombre/>*/}
  </StrictMode>
)
