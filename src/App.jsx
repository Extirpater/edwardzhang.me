import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <div className="container">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
