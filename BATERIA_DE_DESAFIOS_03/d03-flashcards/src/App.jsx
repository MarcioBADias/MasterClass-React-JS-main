import { useState } from "react"

const cardsInfo = [
  {
    id: 7336,
    question: "Do quê aplicações React são feitas?",
    answer: "Componentes",
  },
  {
    id: 8832,
    question: "Qual é o nome da sintaxe usada para descrever UI no React?",
    answer: "JSX",
  },
  {
    id: 3457,
    question: "Em qual linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 9103,
    question: "Qual método usar para renderizar uma lista no React?",
    answer: "map",
  },
  {
    id: 1297,
    question: "Qual empresa criou o React?",
    answer: "Meta",
  },
  {
    id: 2002,
    question: "Como passar informações para um componente React?",
    answer: "Através de props",
  },
]

const Card = ({ card, onClickToggle }) => {
  const toggleClickCard = () => onClickToggle(card.id)
  return (
    <li className={card.showAnswer ? 'card answer-card' : 'card'} onClick={toggleClickCard}>
      {card.showAnswer ? card.answer : card.question}
    </li>
  )
}

const App = () => {
  const [cards, setCards] = useState(cardsInfo.map(card => ({ ...card, showAnswer: false })))

  const toggleCardAnswer = id => {
    const updateCards = cards.map(card => id === card.id ? { ...card, showAnswer: !card.showAnswer } : { ...card, showAnswer: false })
    setCards(updateCards)
  }

  return (
    <>
      <ul className="flashcards">
        {cards.map(card => (
          < Card
            key={card.id}
            card={card}
            onClickToggle={toggleCardAnswer}
          />
        ))}
      </ul>
    </>
  )
}
export { App }
