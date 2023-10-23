// eslint-disable-next-line react/prop-types
const Count = ({ el }) => {
  const message = (btn, text) => {
    text[text.length - 1] === 'o' ?
      console.log(`Clicou no ${btn} do ${text}`) :
      console.log(`Clicou no ${btn} da ${text}`)
  }
  const minusBtn = () => message('menos', el)
  const masBtn = () => message('mais', el)

  return (
    <div className="count">
      <button onClick={minusBtn}>-</button>
      <h2>{el}</h2>
      <button onClick={masBtn}>+</button>
    </div>
  )
}
const App = () => {
  const currentDate = new Date()
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const dayOfMonth = currentDate.getDate()
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  return (
    <>
      <div className="container">
        <Count el="Intervalo" />
        <Count el="Contagem" />
      </div>
      <div className="container">
        <h2>Hoje é {dayOfWeek}, {dayOfMonth} de {month} de {year}</h2>
      </div>
    </>
  )
}

export { App }
