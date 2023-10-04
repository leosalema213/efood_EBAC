import { BrowserRouter } from 'react-router-dom'

import Footer from './containers/Footer'
import { Globalcss } from './styles'

import Rotas from './routes'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globalcss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
