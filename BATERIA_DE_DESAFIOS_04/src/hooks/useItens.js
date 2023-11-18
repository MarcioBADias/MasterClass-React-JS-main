import { useState } from "react"

const useItens = () => {
    const [itens, setItens] = useState([])
    const [orderBy, setOrderBy] = useState('newest')

    const handleSubmitForm = (newItem) => setItens((prev) => [...prev, newItem])
    const handleChangeOrder = (e) => setOrderBy(e.target.value)
    const handleClickDelete = (id) => setItens(prev => prev.filter(item => item.id !== id))
    const handleClickClearBtn = () => setItens([])

    const handleChangeCheck = (id) => setItens(prev => prev
        .map(item => item.id === id ? { ...item, stored: !item.stored } : item))

    return {
        itens,
        orderBy,
        handleSubmitForm,
        handleChangeOrder,
        handleClickDelete,
        handleClickClearBtn,
        handleChangeCheck
    }
}

export { useItens }