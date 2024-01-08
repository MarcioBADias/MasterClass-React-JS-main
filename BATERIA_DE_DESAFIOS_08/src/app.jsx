/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react"

const App = () => {
  const [dog, setDog] = useState(null)

  const handleClick = () => {
    fetch('https://random.dog/woof.json').then(r => r.json()).then(data => setDog(data)).catch(console.log)
  }

  return (
    <>
      {dog?.url && <img src={dog.url} alt='Foto de cachorro aleatório' />}
      <button onClick={handleClick}>Mostrar um cachorro</button>
    </>
  )
}

export { App }

