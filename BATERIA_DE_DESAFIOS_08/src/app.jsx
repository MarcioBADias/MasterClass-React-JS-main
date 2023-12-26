const App = () => {
  const handleClick = () => {
    fetch('./src/fake-user.json')
      .then(r => r.json())
      .then(console.log)
      .catch(console.log)
  }

  return <button onClick={handleClick}>Buscar dados</button>
}
export { App }
