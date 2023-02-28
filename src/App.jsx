import { useState } from 'react'
import './App.css'
import PhraseCard from "./components/PhraseCard"
import Button from './components/Button'

function App() {
  const BackgroudImage = ["fondo1.png", "fondo2.png", "fondo3.png", "fondo4.png"]

  const [changeImage, setChangeImage] = useState( 0 )

  const changeBackgroundImage = () => {
    if (changeImage === BackgroudImage.length - 1){
      setChangeImage (0)
    }else{
      setChangeImage(changeImage + 1)
    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(/images/${BackgroudImage[changeImage]})` }}>
      <h1 className='Tittle'>Prueba tu fortuna!!</h1>  
      <PhraseCard/>  
      <Button
      changeBackgroundImage = {changeBackgroundImage}/> 
    </div>
  )
}

export default App
