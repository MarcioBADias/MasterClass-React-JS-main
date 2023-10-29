import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  const incrementMultiple = () => setCount(c => c + 3)

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={incrementMultiple}>+3</button>
    </>
  )
}

export { App }
