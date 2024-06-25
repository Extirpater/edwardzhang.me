import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'

import './index.css'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  )
}

export default App
