import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutFrontend from './components/About_Frontend'
import AboutBackend from './components/About_Backend'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutFrontend" element={<AboutFrontend />} />
          <Route path="aboutBackend" element={<AboutBackend />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
