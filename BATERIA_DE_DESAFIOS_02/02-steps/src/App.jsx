
const App = () => {

  return (
    <>
      <div className="container-close">
        <button className="close">Fechar</button>
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
          <button>
            Anterior
          </button>
          <button>Próximo</button>
        </div>
      </div>
    </>
  )
}

export { App }
