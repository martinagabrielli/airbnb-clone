import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {

  return (
    <>
      <NavBar />
      <div className="main">
        <Hero />
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
