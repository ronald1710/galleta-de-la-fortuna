import { useState } from 'react'
import './App.css'
import PhraseCard from "./components/PhraseCard"
import Button from './components/Button'
import phrases from './assets/data/phrases.json'

function App() {
  const BackgroudImage = ["fondo1.png", "fondo2.png", "fondo3.png", "fondo4.png"]

  const [changeImage, setChangeImage] = useState( 0 )
  const changeBackgroundImage = () => {
    changePhrases()
    if (changeImage === BackgroudImage.length - 1){
      setChangeImage (0)
    }else{
      setChangeImage(changeImage + 1)
    }
  }

  const [ index, setIndex ] = useState ( 0 )
  const changePhrases = () => {
    console.log("changePhrases")
    if (index === phrases.length - 1) {
      setIndex (0)
    }else{
      setIndex ( Math.floor( Math.random() * phrases.length ) )
    }
  }
 



  return (
    <div className="App" style={{ backgroundImage: `url(/images/${BackgroudImage[changeImage]})` }}>
      <h1 className='Tittle'>Prueba tu fortuna!!</h1>  
      <PhraseCard
      phrase = {phrases[index].phrase}
      author = {phrases[index].author}/>  
      <Button
      changeBackgroundImage = {changeBackgroundImage}
      changePhrases = {changePhrases}
      /> 
    </div>
  )
}

export default App
