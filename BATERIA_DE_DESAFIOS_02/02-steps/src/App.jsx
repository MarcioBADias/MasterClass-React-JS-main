const App = () => {
  const handleShowContent = e => console.log(e.target.textContent)
  return (
    <>
      <div className="container-close">
        <button className="close" onClick={handleShowContent}>Fechar</button>
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
          <button onClick={handleShowContent}>Anterior</button>
          <button onClick={handleShowContent}>Próximo</button>
        </div>
      </div>
    </>
  )
}

export { App }
