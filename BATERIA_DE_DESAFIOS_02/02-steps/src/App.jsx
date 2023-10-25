// eslint-disable-next-line react/prop-types
const ClickBtn = ({ text }) => {
  const readBtnText = (btnContent) => console.log(btnContent)
  const readOnCLick = () => readBtnText(text)
  return (
    <button className="close" onClick={readOnCLick}>{text}</button>
  )
}

const App = () => {
  return (
    <>
      <div className="container-close">
        <ClickBtn text="Fechar" />
      </div>
      <div className="steps">
        <div className="numbers">
          <div className=" active">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <h2 className="message">
          Passo 1: Entender o problema do cliente
        </h2>
        <div className="buttons">
          <ClickBtn text="Anterior" />
          <ClickBtn text="Prócimo" />
        </div>
      </div>
    </>
  )
}

export { App }
