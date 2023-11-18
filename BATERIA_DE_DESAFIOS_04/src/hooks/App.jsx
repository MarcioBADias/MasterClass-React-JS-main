/* eslint-disable react/prop-types */
import { useItens } from "./useItens.js"
import { FormAddItens } from "../components/formAddItens.jsx"
import { ListOfItens } from "../components/listOfItens.jsx"
import { Filters } from "../components/filters.jsx"
import { Stats } from "../components/stats.jsx"
import { Logo } from "../components/logo.jsx"

const App = () => {
  const state = useItens()

  return (
    <>
      <Logo />

      <FormAddItens onHandleSubmitForm={state.handleSubmitForm} />

      <div>
        <ListOfItens
          itens={state.itens}
          orderBy={state.orderBy}
          onClickCheck={state.handleChangeCheck}
          onClickDelete={state.handleClickDelete}
        />

        <Filters
          orderBy={state.orderBy}
          onChangeOrder={state.handleChangeOrder}
          onClickClearBtn={state.handleClickClearBtn}
        />
      </div>
      <Stats itens={state.itens} />
    </>
  )
}

export { App }