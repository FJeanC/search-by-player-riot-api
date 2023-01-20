import React from 'react'
import Rotas from './routes';
import './App.css'
import { BrowserRouter } from 'react-router-dom'

const app = function () {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>

  )
}



export default app;



