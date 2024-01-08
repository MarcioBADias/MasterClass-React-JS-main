/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

const App = () => {
  const [dog, setDog] = useState(null)
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(r => r.json())
      .then(data => setCats(data))
      .catch(console.log)
  }, [])

  const handleClick = () => {
    fetch('https://random.dog/woof.json').then(r => r.json()).then(data => setDog(data)).catch(console.log)
  }

  return (
    <>
      {dog?.url && <img src={dog.url} alt='Foto de cachorro aleatório' />}
      <button onClick={handleClick}>Mostrar um cachorro</button>

      {cats.length > 0 &&
        <ul>
          {cats.map((img, i) => i < 3 && (
            <li key={img.id}>
              <img
                style={{ maxWidth: 200, maxHeight: 200 }}
                src={img.url}
                alt={`Gato numero ${img.id}`} />
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export { App }

