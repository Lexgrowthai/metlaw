import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FamilyLaw from './pages/FamilyLaw'
import CriminalDefence from './pages/CriminalDefence'
import DivorceAndSeparation from './pages/DivorceAndSeparation'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/family-law" element={<FamilyLaw />} />
      <Route path="/criminal-defence" element={<CriminalDefence />} />
      <Route path="/divorce-and-separation" element={<DivorceAndSeparation />} />
    </Routes>
  )
}
