import { useState } from 'react'

const steps = [
  {
    id: crypto.randomUUID(),
    description: "Entender o problema do cliente"
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description: "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]

const Steps = () => {
  const [stepCount, setStepCount] = useState(0)
  const nextStep = () => stepCount < steps.length - 1 && setStepCount(step => step + 1)
  const previusStep = () => stepCount && setStepCount(step => step - 1)
  return (
    <div className="steps">
      <div className="numbers">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className={i === stepCount ? 'active' : ''}
          >{i + 1}</div>
        ))}
      </div>
      <h2 className="message">
        Passo 1: {steps[stepCount].description}
      </h2>
      <div className="buttons">
        <button onClick={previusStep}>Anterior</button>
        <button onClick={nextStep}>Próximo</button>
      </div>
    </div>
  )
}

const App = () => {
  const [showContainer, setShowContainer] = useState(true)
  const handleShowContent = () => setShowContainer(!showContainer)
  return (
    <>
      <div className="container-close">
        <button className="close" onClick={handleShowContent}>{showContainer ? 'Fechar' : 'Abrir'}</button>
      </div>
      {showContainer &&
        <Steps />
      }
    </>
  )
}

export { App }
