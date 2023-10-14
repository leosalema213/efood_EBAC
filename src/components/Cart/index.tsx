import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { close, remove, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../../containers/ProductsList'
import {
  CartContainer,
  CartDescription,
  CartItem,
  Overlay,
  SideBar,
  Form,
  InputGroup,
  InputGrouping,
  Title,
  MessageContainer
} from './style'
import lixeira from '../../assets/images/lixeira.png'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
    console.log('cliquei')
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [cart, setCart] = useState(true)
  const [deliveryData, setDeliveryData] = useState(false)
  const [paymentData, setPaymentData] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const navigate = useNavigate()
  const goToDelivery = () => {
    setCart(false)
    setPaymentData(false)
    setDeliveryData(true)
  }
  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number
    ) {
      setPaymentData(true)
      setDeliveryData(false)
    }
  }
  const backToCart = () => {
    setCart(true)
    setPaymentData(false)
    setDeliveryData(false)
    setCheckout(false)
  }
  const goToCheckout = () => {
    if (
      !form.errors.cardOwner &&
      !form.errors.cardNumber &&
      !form.errors.cardCode &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear
    ) {
      setPaymentData(false)
      setCheckout(true)
    }
  }
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      reference: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'o nome precisa ter mais de 3 caracteres')
        .required('este campo é obrigatório'),
      address: Yup.string().required('este campo é obrigatório'),
      city: Yup.string().required('este campo é obrigatório'),
      cep: Yup.string().required('este campo é obrigatório'),
      number: Yup.number()
        .min(3, 'o nome precisa ter mais de 3 caracteres')
        .required('este campo é obrigatório.'),
      cardOwner: Yup.string()
        .min(3, 'o nome precisa ter mais de 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.number().required('O campo é obrigatório'),
      expiresYear: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.reference
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              year: Number(values.expiresYear),
              month: Number(values.expiresMonth)
            }
          }
        }
      })
    }
  })

  const sucessPayment = () => {
    dispatch(close())
    dispatch(clear())
    backToCart()
    navigate('/')
  }
  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar isVisible={cart}>
        {items.length < 1 ? (
          <p className="emptyCart">
            Você não possui nenhum produto no carrinho
          </p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                    <img
                      onClick={() => removeItem(item.id)}
                      src={lixeira}
                      alt=""
                    />
                  </div>
                </CartItem>
              ))}
            </ul>
            <CartDescription>
              <p>Valor total</p> <span>{formataPreco(getTotalPrice())}</span>
              <button className="buttonAdicionar" onClick={goToDelivery}>
                Continuar com a entrega
              </button>
            </CartDescription>
          </>
        )}
      </SideBar>
      <SideBar isVisible={deliveryData}>
        <Form onSubmit={form.handleSubmit}>
          <Title>Entrega</Title>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              onChange={form.handleChange}
              name="fullName"
              onBlur={form.handleBlur}
              className={checkInput('fullName') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              onChange={form.handleChange}
              name="address"
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              onChange={form.handleChange}
              name="city"
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
            />
          </InputGroup>
          <InputGrouping>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                mask="99999-999"
                id="cep"
                type="text"
                onChange={form.handleChange}
                name="cep"
                onBlur={form.handleBlur}
                className={checkInput('cep') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Numero</label>
              <input
                id="number"
                type="text"
                onChange={form.handleChange}
                name="number"
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
              />
            </InputGroup>
          </InputGrouping>
          <InputGroup className="magin-bottom">
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              id="reference"
              type="text"
              onChange={form.handleChange}
              name="reference"
              onBlur={form.handleBlur}
              className={checkInput('reference') ? 'error' : ''}
            />
          </InputGroup>
          <button
            className="buttonAdicionar"
            type="button"
            onClick={goToPayment}
          >
            Continuar com o pagamento
          </button>
          <button
            className="buttonAdicionar"
            type="button"
            onClick={backToCart}
          >
            Voltar para o carrinho
          </button>
        </Form>
      </SideBar>
      <SideBar isVisible={paymentData}>
        <Form onSubmit={form.handleSubmit}>
          <Title>
            Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
          </Title>
          <InputGroup>
            <label htmlFor="cardOwner">Nome do cartão</label>
            <input
              id="cardOwner"
              type="text"
              onChange={form.handleChange}
              name="cardOwner"
              onBlur={form.handleBlur}
              className={checkInput('cardOwner') ? 'error' : ''}
            />
          </InputGroup>
          <InputGrouping>
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                id="cardNumber"
                type="text"
                onChange={form.handleChange}
                name="cardNumber"
                onBlur={form.handleBlur}
                className={checkInput('cardNumber') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup maxWidht="86px">
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                mask="999"
                id="cardCode"
                type="text"
                onChange={form.handleChange}
                name="cardCode"
                onBlur={form.handleBlur}
                className={checkInput('cardCode') ? 'error' : ''}
              />
            </InputGroup>
          </InputGrouping>
          <InputGrouping>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                mask="99"
                id="expiresMonth"
                type="text"
                onChange={form.handleChange}
                name="expiresMonth"
                onBlur={form.handleBlur}
                className={checkInput('expiresMonth') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup className="magin-bottom">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                mask="99"
                id="expiresYear"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="expiresYear"
                className={checkInput('expiresYear') ? 'error' : ''}
              />
            </InputGroup>
          </InputGrouping>
          <button
            className="buttonAdicionar"
            type="submit"
            onClick={goToCheckout}
          >
            Finalizar pagamento
          </button>
          <button
            className="buttonAdicionar"
            type="button"
            onClick={goToDelivery}
          >
            Voltar para a edição de endereço
          </button>
        </Form>
      </SideBar>
      {isSuccess ? (
        <SideBar isVisible={checkout}>
          <Title>Pedido realizado - {data.orderId} </Title>
          <MessageContainer>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <button
              className="buttonAdicionar"
              type="button"
              onClick={sucessPayment}
            >
              Concluir
            </button>
          </MessageContainer>
        </SideBar>
      ) : (
        <SideBar isVisible={checkout}>
          <Title> Erro na transação</Title>
          <p>Verifique os dados do cartão</p>
          <button
            className="buttonAdicionar"
            type="button"
            onClick={backToCart}
          >
            Voltar para o carrinho
          </button>
        </SideBar>
      )}
    </CartContainer>
  )
}
export default Cart
