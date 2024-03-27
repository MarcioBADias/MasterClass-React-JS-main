import { useReducer } from 'react'

const reduce = (state, action) =>
  ({
    decrement_interval: {
      ...state,
      interval: state.interval === 1 ? state.interval : state.interval - 1,
    },
    increment_interval: { ...state, interval: state.interval + 1 },
    decrease_count: { ...state, count: state.count - state.interval },
    increment_count: { ...state, count: state.count + state.interval },
  })[action.type] || state

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
  const [state, dispatch] = useReducer(reduce, { interval: 1, count: 0 })
  const currentDate = new Date()

  const daysOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const dayOfMonth = currentDate.getDate() + state.count

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  const incrementInterval = () => dispatch({ type: 'increment_interval' })
  const decreaseInterval = () => dispatch({ type: 'decrease_interval' })
  const incrementCount = () => dispatch({ type: 'increment_count' })
  const decreaseCount = () => dispatch({ type: 'decrease_count' })

  return (
    <>
      <div className="container">
        <Count
          el={`Intervalo: ${state.interval}`}
          onClickAdd={incrementInterval}
          onCLickDecrease={decreaseInterval}
        />
        <Count
          el={`Contador: ${state.count}`}
          onClickAdd={incrementCount}
          onCLickDecrease={decreaseCount}
        />
      </div>
      <div className="container">
        <h2>
          Hoje é {dayOfWeek}, {dayOfMonth} de {month} de {year}
        </h2>
      </div>
    </>
  )
}

export { App }
