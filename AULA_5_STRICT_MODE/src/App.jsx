const games = [
  {
    id: crypto.randomUUID(),
    title: "Monster Manual",
    description: "The Monster Manual presents a horde of classic Dungeons & Dragons creatures, including dragons, giants, mind flayers, and beholders–a monstrous feast for Dungeon Masters ready to challenge their players and populate their adventures.",
    link: "https://www.amazon.com.br/Monster-Manual-Wizards-RPG-Team/dp/0786965614/ref=pd_bxgy_img_sccl_1/138-0495531-9896840?pd_rd_w=7s7gR&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=SEXCS4W7Q55GYKJ6QK56&pd_rd_wg=K7DCj&pd_rd_r=82aada16-6dce-43b0-859f-f9536caa93ee&pd_rd_i=0786965614&psc=1",
    price: "264",
    urlImage: "https://m.media-amazon.com/images/I/51dqNeHTjuL._SX342_SY445_.jpg"
  },
  {
    id: crypto.randomUUID(),
    title: "Dungeon Master's Screen Reincarnated",
    description: "with this indispensable tool for the world's",
    price: "58",
    link: "https://www.amazon.com.br/Dungeon-Masters-Screen-Reincarnated-Wizards/dp/078696619X/ref=d_pd_sim_sccl_3_3/138-0495531-9896840?pd_rd_w=NCVxB&content-id=amzn1.sym.45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_p=45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_r=S04RM5NBFTBQVS1X3NDG&pd_rd_wg=gdafR&pd_rd_r=7f3e68c9-9901-4486-af43-4ff387a294ae&pd_rd_i=078696619X&psc=1",
    urlImage: "https://m.media-amazon.com/images/I/81YzwxT8gqL._SY342_.jpg"
  },
  {
    id: crypto.randomUUID(),
    title: "Player's Handbook",
    description: "The Player’s Handbook is the essential reference for every Dungeons & Dragons roleplayer",
    price: "261",
    link: "https://www.amazon.com.br/Players-Handbook-Wizards-RPG-Team/dp/0786965606/ref=pd_bxgy_img_sccl_2/138-0495531-9896840?pd_rd_w=ynPsT&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=E9FQR20TNNCZFXYBE5JB&pd_rd_wg=fIbr7&pd_rd_r=2f1d367c-05cc-42b4-8daf-4ee28922b02e&pd_rd_i=0786965606&psc=1",
    urlImage: "https://m.media-amazon.com/images/I/811dDmyv-pL._SY425_.jpg"
  },
  {
    id: crypto.randomUUID(),
    title: "Dungeon Master's Guide",
    description: "Everything a Dungeon Master needs to weave legendary stories for the world’s greatest roleplaying game",
    link: "https://www.amazon.com.br/Dungeon-Masters-Guide-Wizards-Team/dp/0786965622/ref=pd_bxgy_img_sccl_2/138-0495531-9896840?pd_rd_w=NfoEB&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=ZP0HZ2P31SBPKRBDDH92&pd_rd_wg=gT6nm&pd_rd_r=706967e1-3fe4-4152-8df8-5c529f645dae&pd_rd_i=0786965622&psc=1",
    price: "272",
    urlImage: "https://m.media-amazon.com/images/I/81cw5IcoM+L._AC_SY450_.jpg"
  },
]

// eslint-disable-next-line react/prop-types
const Game = ({ title, description, price, link, urlImage }) => (
  <li className="game">
    <img className="imgWidth" src={urlImage} alt={`Imagem de capa do livro ${title}`} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>R$ {price},00</p>
    <a href={link}><button>Compre aqui</button></a>
  </li>
)

const GameList = () => (
  <ul>
    {games.map(game => (
      <Game
        key={game.id}
        title={game.title}
        description={game.description}
        price={game.price}
        link={game.link}
        urlImage={game.urlImage}
      />
    ))}
  </ul>
)

const App = () => {
  return (
    <>
      <h1>Jogos em promoção!</h1>
      <GameList />
    </>
  )
}

export { App }
