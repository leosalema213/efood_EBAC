import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { add } from '../../store/reducers/cart'
import { open } from '../../store/reducers/cart'
import { MenuItem, Restaurants } from '../../pages/Home'

import { Modal, ModalContent, ProductContainer } from './styles'
import Product from '../../components/Products'
import close from '../../assets/images/icon-close.png'

type Props = {
  produtos: Restaurants
}
type Modal = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ produtos }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem>()
  const [modal, setModal] = useState<Modal>({
    isVisible: false
  })

  const dispatch = useDispatch()

  const addtoCart = () => {
    dispatch(add(selectedProduct!))
    setModal({
      isVisible: false
    })
    dispatch(open())
  }
  const openModal = (product: MenuItem) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true
    })
  }
  return (
    <>
      <ProductContainer className="containerLarge">
        {produtos.cardapio.map((p) => (
          <li key={p.id} onClick={() => openModal(p)}>
            <Product
              nome={p.nome}
              descricaoDoPrato={p.descricao}
              imagem={p.foto}
            />
          </li>
        ))}
      </ProductContainer>
      {selectedProduct && (
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="containerLarge">
            <img src={selectedProduct.foto} alt={selectedProduct.nome} />
            <div>
              <h3>{selectedProduct.nome}</h3>
              <p>
                {selectedProduct.descricao} <br /> <br />
                Serve: {selectedProduct.porcao}
              </p>
              <button className="buttonAdicionar" onClick={addtoCart}>
                Adicionar ao carrinho - {formataPreco(selectedProduct.preco)}
              </button>
            </div>
            <button>
              <img
                src={close}
                alt=""
                onClick={() =>
                  setModal({
                    isVisible: false
                  })
                }
              />
            </button>
          </ModalContent>
          <div
            onClick={() =>
              setModal({
                isVisible: false
              })
            }
            className="overlay"
          ></div>
        </Modal>
      )}
    </>
  )
}
export default ProductsList
