// eslint-disable-next-line react/prop-types
const Card = ({ faqInfo, answer, index }) => {
  return (
    <div className="item">
      <span className="number">{index}</span>
      <p className="title">{faqInfo}</p>
      <span className="number">-</span>
      <p className="content-box">{answer}</p>
    </div>
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
      <div className="accordion">
        {faqs.map((faq, i) => (
          <Card
            key={faq.id}
            index={i + 1}
            faqInfo={faq.title}
            answer={faq.answer}
          />
        ))}
      </div>
    </>
  )
}

export { App }
