import { useState } from "react"

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

// eslint-disable-next-line react/prop-types
const Card = ({ card, index, onCardClick }) => {
  const openCard = () => onCardClick(card.id)
  return (
    <li className={card.showAnswer ? 'item show-answerBox' : 'item'} onClick={openCard}>
      <span className={card.showAnswer ? 'number show-answer' : 'number'}>{index}</span>
      <p className={card.showAnswer ? 'title show-answer' : 'title'}>{card.title}</p>
      {
        card.showAnswer ?
          <>
            <span className="number">-</span>
            <p className="content-box">{card.answer}</p>
          </> :
          <span className="number">+</span>
      }
    </li>
  )
}

const App = () => {
  const [cards, setCards] = useState(faqs.map(faq => ({ ...faq, showAnswer: false })))

  const openCardContainer = id => {
    const updateCards = cards.map(card => card.id === id ? { ...card, showAnswer: !card.showAnswer } : { ...card, showAnswer: false })
    setCards(updateCards)
  }

  return (
    <>
      <ul className="accordion">
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i + 1}
            card={card}
            onCardClick={openCardContainer}
          />
        ))}
      </ul>
    </>
  )
}

export { App }
