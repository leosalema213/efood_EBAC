import { BrowserRouter } from 'react-router-dom'

import Footer from './containers/Footer'
import { Globalcss } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
