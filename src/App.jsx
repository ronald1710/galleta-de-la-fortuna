import { useState } from 'react'
import './App.css'
import PhraseCard from "./components/PhraseCard"
import Button from './components/Button'

function App() {
  

  return (
    <div className="App" style={{ backgroundImage: "url(/images/fondo1.png)" }}>
      <h1 className='Tittle'>Prueba tu fortuna!!</h1>  
      <PhraseCard/>  
      <Button/> 
    </div>
  )
}

export default App
