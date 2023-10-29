/* eslint-disable react/prop-types */
import { useState } from 'react'

const Toggle = ({ shouldShow, onClickToggle }) => {
  return (
    <div>
      {shouldShow && <p> Tô aqui</p>}
      <button onClick={onClickToggle}>Alterar visibilidade</button>
    </div>
  )
}

const Title = ({ children }) => <h1>{children}</h1>

const Article = ({ children }) => <article>{children}</article>

const Text = () => <span>Opa! <i>Aqui o filho</i></span>

const Content = () => (
  <>
    <Title> Um título </Title>
    <p>Um parágrafo</p>
  </>
)

const App = () => {
  const [shouldShow, setShouldShow] = useState(true)

  const handleClickToggle = () => setShouldShow(s => !s)

  return (
    <>
      <div className="app">
        <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
        <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
      </div>
      <div>
        <Article>
          <Title>
            <Text />
          </Title>

          <Content />
        </Article>
      </div>
    </>
  )
}

export { App }
