/* eslint-disable react/prop-types */
const Filters = ({ orderBy, onChangeOrder, onClickClearBtn }) => (
    <div className="container">
        <select value={orderBy} onChange={onChangeOrder}>
            <option value="newest">Ordenar por mais recentes</option>
            <option value="stored">Mostrar Guardados</option>
            <option value="alphabetically">Ordenar por ordem alfabética</option>
        </select>
        <button onClick={onClickClearBtn}>Lipar lista</button>
    </div>
)

export { Filters }