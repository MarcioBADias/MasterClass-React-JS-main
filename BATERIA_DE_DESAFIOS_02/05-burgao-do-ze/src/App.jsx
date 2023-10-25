const burgers = [
  {
    id: crypto.randomUUID(),
    name: "Duo",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
    price: 37,
    photoName: "img/burgers/duo.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Kids",
    ingredients:
      "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
    price: 29,
    photoName: "img/burgers/kids.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Master",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 51,
    photoName: "img/burgers/master.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Monster",
    ingredients:
      "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 47,
    photoName: "img/burgers/monster.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Prime",
    ingredients:
      "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
    price: 43,
    photoName: "img/burgers/prime.jpg",
    soldOut: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Slim",
    ingredients:
      "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
    price: 27,
    photoName: "img/burgers/slim.jpg",
    soldOut: false,
  }
]

const Header = () => {
  return (
    <header>
      <img src="../img/logo-burgao-do-ze.jpg" alt="Logo Burgão do Zé" className="logo" />
    </header>
  )
}

// eslint-disable-next-line react/prop-types
const Burger = ({ name, ingredients, price, photoName, soldOut }) => (
  <>
    <li className={soldOut ? "burger sold-out" : "burger"}>
      <img src={photoName} alt={`Imagem do ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'CABO!' : `R$ ${price}`}</span>
      </div>
    </li>
  </>
)

const Menu = () => (
  <main className="menu">
    {burgers.length > 0 && (
      <>
        <h2>Cardápio</h2>
        <p>Depois de uma semana desafiadora, nada melhor do que saborear um burger onde cada mordida é um abraço saboroso, não é mesmo?🍔✨</p>
        <ul className="burgers">
          {
            burgers.map(burger => (
              <Burger
                key={burger.id}
                name={burger.name}
                ingredients={burger.ingredients}
                price={burger.price}
                photoName={burger.photoName}
                soldOut={burger.soldOut}
              />
            ))
          }
        </ul>
      </>
    )
    }
  </main>
)

const Footer = () => {
  const date = new Date()
  const hour = date.getHours()
  const openHour = 12
  const closeHour = 22
  const isOpenHours = hour >= openHour && hour < closeHour
  const sendOrder = () => console.log('Direcionando para fazer pedido...')
  return (
    <div className="footer">
      <div className="order">
        {
          isOpenHours
            ? <>
              <p>🕛 Tamo aberto até as 22h. Vem visitar a gente ou faça seu pedido online.</p>
              <button className="btn" onClick={() => sendOrder()}>Fazer o pedido</button>
            </>
            : <p>🕛 Vamo abrir às 12h</p>
        }
      </div>
    </div>
  )
}

const App = () => {

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export { App }
