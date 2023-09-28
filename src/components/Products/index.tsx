import { useState } from 'react'

import { Modal, ProductItem, ModalContent } from './styles'
import close from '../../assets/images/icon-close.png'

type Props = {
  imagem: string
  nome: string
  descricaoDoPrato: string
  preco: number
  porcao: string
}
type Modal = {
  isVisible: boolean
}

const fortmataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ imagem, descricaoDoPrato, nome, preco, porcao }: Props) => {
  const [modal, setModal] = useState<Modal>({
    isVisible: false
  })
  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <ProductItem>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{getDescricao(descricaoDoPrato)}</p>
      <a
        href="#"
        className="buttonAdicionar"
        onClick={() =>
          setModal({
            isVisible: true
          })
        }
      >
        Mais detalhes
      </a>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="containerLarge">
          <img src={imagem} alt={nome} />
          <div>
            <h3>{nome}</h3>
            <p>
              {descricaoDoPrato} <br /> <br />
              Serve: {porcao}
            </p>
            <button className="buttonAdicionar">
              Adicionar ao carrinho - {fortmataPreco(preco)}
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
    </ProductItem>
  )
}
export default Product
