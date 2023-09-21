import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import HiokiSuchi from './pages/Restaurantes/HiokiSuchi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hiokisuchi" element={<HiokiSuchi />} />
  </Routes>
)

export default Rotas
