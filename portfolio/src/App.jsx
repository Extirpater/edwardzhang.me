import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './index.css'

function Home() {
  return (
    <>
      <p>Edward Zhang</p>
    </>
  )
}

function About() {
  return <h2>About Page</h2>
}

function App() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
