/* eslint-disable react/prop-types */
import { useState } from "react"

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const FormAddItens = ({ onHandleSubmit }) => (
  <form onSubmit={onHandleSubmit}>
    <h3>O que você precisa guardar?</h3>
    <select name="selectQtd">
      {ids.map((id, i) => (
        <option key={id} value={i + 1}>{i + 1}</option>
      ))}
    </select>
    <input name="inputAdd" placeholder="Manda aqui" autoFocus />
    <button>Adicionar</button>
  </form>
)

const ListOfItens = ({ sortedItens, onClickCheck, onClickDelete }) => (
  <ul>
    {sortedItens.map(item => (
      <li key={item.id}>
        <input type="checkbox" checked={item.stored} onChange={() => onClickCheck(item.id)} />
        <span className={item.stored ? 'checked-item' : ''}>{item.quantity} {item.name}</span>
        <button onClick={() => onClickDelete(item.id)}>❌</button>
      </li>
    ))}
  </ul>
)

const Filters = ({ orderBy, onChangeOrder }) => (
  <div className="container">
    <select value={orderBy} onChange={onChangeOrder}>
      <option value="newest">Ordenar por mais recentes</option>
      <option value="stored">Mostrar Guardados</option>
      <option value="alphabetically">Ordenar por ordem alfabética</option>
    </select>
  </div>
)

const Stats = ({ itens }) => {
  const storedItens = itens.reduce((acc, item) => item.stored ? ++acc : acc, 0)
  const storedPercentege = itens.length === 0 ? 0 : ((storedItens / itens.length) * 100).toFixed(0)
  const singularPlural = itens.length === 1 ? 'item' : 'itens'

  return (
    <footer>
      <p>
        {`Você tem ${itens.length} ${singularPlural} na lista`}
        {itens.length > 0 && <span>Você guardou {storedItens} ({storedPercentege}%)</span>}
      </p>
    </footer>
  )
}

const App = () => {
  const [itens, setItens] = useState([])
  const [orderBy, setOrderBy] = useState('newest')

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

  const handleChangeOrder = (e) => setOrderBy(e.target.value)

  const sortedItens = orderBy === 'stored'
    ? itens.filter(item => item.stored)
    : orderBy === 'alphabetically'
      ? itens.toSorted((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
      : itens

  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="logo espaço mulher" />
        <h1>Espaço Mulher</h1>
      </header>

      <FormAddItens onHandleSubmit={handlesubmit} />

      <div>
        <ListOfItens
          sortedItens={sortedItens}
          onClickCheck={handleChangeCheck}
          onClickDelete={handleClickDelete}
        />

        <Filters orderBy={orderBy} onChangeOrder={handleChangeOrder} />
      </div>
      <Stats itens={itens} />
    </>
  )
}

export { App }