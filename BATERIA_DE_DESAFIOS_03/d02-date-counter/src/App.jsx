import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Count = ({ el, onClickAdd, onCLickDecrease }) => {

  return (
    <div className="count">
      <button onClick={onCLickDecrease}>-</button>
      <h2>{el}</h2>
      <button onClick={onClickAdd}>+</button>
    </div>
  )
}
const App = () => {
  const [interval, setInterval] = useState(1)
  const [counter, setCounter] = useState(0)

  const currentDate = new Date()

  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const dayOfMonth = currentDate.getDate() + counter

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  const addCounter = () => setCounter((count) => count + interval)
  const decreaseCounter = () => setCounter(c => c - interval)
  const addInterval = () => setInterval(i => ++i)
  const decreaseInterval = () => interval === 1 ? setInterval(1) : setInterval(i => --i)

  return (
    <>
      <div className="container">
        <Count
          el={`Intervalo: ${interval}`}
          onClickAdd={addInterval}
          onCLickDecrease={decreaseInterval}
        />
        <Count
          el={`Contador: ${counter}`}
          onClickAdd={addCounter}
          onCLickDecrease={decreaseCounter}
        />
      </div>
      <div className="container">
        <h2>Hoje é {dayOfWeek}, {dayOfMonth} de {month} de {year}</h2>
      </div>
    </>
  )
}

export { App }
