/* eslint-disable react/prop-types */
const ListOfItens = ({ itens, orderBy, onClickCheck, onClickDelete }) => {
    const sortedItens = orderBy === 'stored'
        ? itens.filter(item => item.stored)
        : orderBy === 'alphabetically'
            ? itens.toSorted((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
            : itens
    return (
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
}

export { ListOfItens }