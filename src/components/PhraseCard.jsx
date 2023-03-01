

const Button = ( {phrase, author} ) => {
 


  return(
    <div className="ContainerPhrase" style={{ backgroundColor: "white" }}>
      <p className="Phrase">{phrase}</p>
      <br />
      <p className="Author">{author}</p>

    </div>
  )
}

export default Button
