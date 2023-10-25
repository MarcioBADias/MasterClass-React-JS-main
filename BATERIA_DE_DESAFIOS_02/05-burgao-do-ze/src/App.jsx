const Header = () => {
  return (
    <div className="container">
      <img src="../img/logo-burgao-do-ze.jpg" alt="Logo Burgão do Zé" className="logo" />
    </div>
  )
}

const Burger = ({ name, ingredients, price, photoName, soldOut }) => (
  <>
    <div className={soldOut ? "burger sold-out" : "burger"}>
      <img src={photoName} alt={`Imagem do ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{`R$ ${price}`}</span>
      </div>
    </div>
  </>
)

const Menu = () => {
  const burgers = [
    {
      name: "Duo",
      ingredients:
        "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
      price: 37,
      photoName: "img/burgers/duo.jpg",
      soldOut: false,
    },
    {
      name: "Kids",
      ingredients:
        "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
      price: 29,
      photoName: "img/burgers/kids.jpg",
      soldOut: false,
    },
    {
      name: "Master",
      ingredients:
        "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
      price: 51,
      photoName: "img/burgers/master.jpg",
      soldOut: false,
    },
    {
      name: "Monster",
      ingredients:
        "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
      price: 47,
      photoName: "img/burgers/monster.jpg",
      soldOut: false,
    },
    {
      name: "Prime",
      ingredients:
        "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
      price: 43,
      photoName: "img/burgers/prime.jpg",
      soldOut: true,
    },
    {
      name: "Slim",
      ingredients:
        "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
      price: 27,
      photoName: "img/burgers/slim.jpg",
      soldOut: false,
    }
  ]

  return (
    <div className="menu">
      <h2>Cardápio</h2>
      <p>Depois de uma semana desafiadora, nada melhor do que saborear um burger onde cada mordida é um abraço saboroso, não é mesmo?🍔✨</p>
      <div className="burgers">
        {
          burgers.map(burger => (
            <Burger
              name={burger.name}
              ingredients={burger.ingredients}
              price={burger.price}
              photoName={burger.photoName}
              soldOut={burger.soldOut}
            />
          ))
        }
      </div>
    </div>
  )

}

const Footer = () => {
  const sendOrder = () => console.log('Direcionando para fazer pedido...')
  const hour = 15
  const isOpenHours = hour > 12 && hour < 22
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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

export { App }
