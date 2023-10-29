import { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  const handleAddCount = () => setCount(++count)

  return (
    <>
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={handleAddCount}>+</button>
    </>
  )
}

export { App }
