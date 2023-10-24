// eslint-disable-next-line react/prop-types
const Card = ({ cardInfo, id }) => {
  const showId = (cardInfo) => console.log(cardInfo)
  return (
    <p className="accordion" onClick={() => showId(id)}>{cardInfo}</p>
  )
}

const App = () => {
  const faqs = [
    {
      id: crypto.randomUUID(),
      title: "Quem é a maior celebridade do mundo dos games no BR?",
      answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
    },
    {
      id: crypto.randomUUID(),
      title: "Onde fica a europa da américa do sul?",
      answer: "Argentina. BR vive como rei em Buenos Aires.",
    },
    {
      id: crypto.randomUUID(),
      title: "Qual é a grande oportunidade para desenvolvedores BR?",
      answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
    },
  ]

  return (
    <>
      <div className="constent-box">
        {faqs.map(card => (
          <Card
            key={card.id}
            id={card.id}
            cardInfo={card.question}
          />
        ))}
      </div>
    </>
  )
}

export { App }
