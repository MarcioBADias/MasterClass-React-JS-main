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
          <div className="buttons active">
            <span>1</span>
          </div>
          <div className="buttons">
            <span>2</span>
          </div>
          <div className="buttons">
            <span>3</span>
          </div>
          <div className="buttons">
            <span>4</span>
          </div>
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
