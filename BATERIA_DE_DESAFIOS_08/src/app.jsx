/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

const memesAPI = 'https://raw.githubusercontent.com/MarcioBADias/data-fake/main/memes.json'

const getRandomMemes = (memes, count) => {
  const shuffledMemes = memes.sort(() => 0.5 - Math.random())
  return shuffledMemes.slice(0, count)
}

const App = () => {
  const [memes, setMemes] = useState([])
  const [randomMemes, setRandomMemes] = useState([])

  useEffect(() => {
    fetch(memesAPI)
      .then((res) => res.json())
      .then((data) => setMemes(data))
      .catch(console.log)
  }, [])

  useEffect(() => {
    if (memes.length > 0) {
      const randomMemes = getRandomMemes(memes, 3)
      setRandomMemes(randomMemes)
    }
  }, [memes])

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      {randomMemes.map((meme, index) => (
        <img key={index} src={meme.url} style={{ maxWidth: 500, margin: "10px" }} />
      ))}
    </div>
  )
}

export { App }

