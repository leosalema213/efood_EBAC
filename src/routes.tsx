import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LaDolce from './pages/Restaurantes/LaDolce'
import HiokiSushi from './pages/Restaurantes/HiokiSuchi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/laDolce" element={<LaDolce />} />
    <Route path="/hiokiSushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
