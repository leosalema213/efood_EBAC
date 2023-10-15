import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Product from '../../components/Products'
import close from '../../assets/images/icon-close.png'

import * as S from './styles'
import { add } from '../../store/reducers/cart'
import { open } from '../../store/reducers/cart'

type Props = {
  products: Restaurants
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

const ProductsList = ({ products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem>()
  const [modal, setModal] = useState<Modal>({
    isVisible: false
  })

  const dispatch = useDispatch()

  const addtoCart = () => {
    if (selectedProduct) {
      dispatch(add(selectedProduct))
    }
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
      <S.ProductContainer className="containerLarge">
        {products.cardapio.map((p) => (
          <li key={p.id} onClick={() => openModal(p)}>
            <Product
              name={p.nome}
              dishDescription={p.descricao}
              image={p.foto}
            />
          </li>
        ))}
      </S.ProductContainer>
      {selectedProduct && (
        <S.Modal className={modal.isVisible ? 'visivel' : ''}>
          <S.ModalContent className="containerLarge">
            <img src={selectedProduct.foto} alt={selectedProduct.nome} />
            <div>
              <h3>{selectedProduct.nome}</h3>
              <p>
                {selectedProduct.descricao} <br /> <br />
                Serve: {selectedProduct.porcao}
              </p>
              <button className="buttonAdd" onClick={addtoCart}>
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
          </S.ModalContent>
          <div
            onClick={() =>
              setModal({
                isVisible: false
              })
            }
            className="overlay"
          ></div>
        </S.Modal>
      )}
    </>
  )
}
export default ProductsList
