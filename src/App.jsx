import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'

import './index.css'


function App() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </div>
    </>
  )
}

export default App
