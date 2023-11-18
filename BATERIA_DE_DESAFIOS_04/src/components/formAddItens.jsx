/* eslint-disable react/prop-types */
import { useState } from "react"

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const FormAddItens = ({ onHandleSubmitForm }) => {
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('1')

    const handleChangeInput = e => setInputValue(e.target.value)
    const handleChangeSelect = e => setSelectValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        onHandleSubmitForm({
            id: crypto.randomUUID(),
            quantity: +selectValue,
            name: inputValue,
            stored: false
        })

        setInputValue('')
        setSelectValue('1')

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>O que você precisa guardar?</h3>
            <select
                value={selectValue}
                onChange={handleChangeSelect}
            >
                {ids.map((id, i) => (
                    <option key={id} value={i + 1}>{i + 1}</option>
                ))}
            </select>
            <input
                value={inputValue}
                onChange={handleChangeInput}
                placeholder="Manda aqui"
                autoFocus
            />
            <button>Adicionar</button>
        </form>
    )
}

export { FormAddItens }