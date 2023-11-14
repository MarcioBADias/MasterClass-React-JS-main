import { useState } from "react"

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const App = () => {
  const [itens, setItens] = useState([])

  const handlesubmit = (e) => {
    e.preventDefault()
    const { selectQtd, inputAdd } = e.target.elements

    setItens((prev) => [...prev,
    {
      id: crypto.randomUUID(),
      quantity: +selectQtd.value,
      name: inputAdd.value,
      stored: false
    }])
  }

  const handleClickDelete = (id) => setItens(prev => prev.filter(item => item.id !== id))

  const handleChangeCheck = (id) => setItens(prev => prev.map(item => item.id === id ? { ...item, stored: !item.stored } : item))

  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="logo espaço mulher" />
        <h1>Espaço Mulher</h1>
      </header>
      <form onSubmit={handlesubmit}>
        <h3>O que você precisa guardar?</h3>
        <select name="selectQtd">
          {ids.map((id, i) => (
            <option key={id} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <input name="inputAdd" placeholder="Manda aqui" autoFocus />
        <button>Adicionar</button>
      </form>
      <div>
        <ul>
          {itens.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.stored} onChange={() => handleChangeCheck(item.id)} />
              <span className={item.stored ? 'checked-item' : ''}>{item.quantity} {item.name}</span>
              <button onClick={() => handleClickDelete(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { App }