/* eslint-disable react/prop-types */
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

export { Stats }