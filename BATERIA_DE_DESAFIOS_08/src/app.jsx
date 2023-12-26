/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const App = () => {
  const [cats, setCats] = useState([])
  const [catImg, setCatImg] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MarcioBADias/data-fake/main/ten-cats.json')
      .then(res => res.json())
      .then(data => setCats(data))
      .catch(console.log)
  }, [cats])

  const handleClick = () => {
    console.log(cats[0].url)
    setCatImg(cats[Math.floor(Math.random() * 10)].url)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {catImg !== null && <img src={catImg} style={{ maxWidth: 500 }} />}
      <button onClick={handleClick} style={{ marginTop: '1rem' }}>Mostrar gatinhos</button>
    </div>
  )
}
export { App }
