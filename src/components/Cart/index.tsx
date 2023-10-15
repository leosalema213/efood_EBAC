import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import lixeira from '../../assets/images/lixeira.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './style'
import { close, remove, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../../containers/ProductsList'

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

  //function responsible for redirecting to the delivery form
  const goToDelivery = () => {
    setCart(false)
    setPaymentData(false)
    setDeliveryData(true)
  }
  //function responsible for redirecting to the purchase form
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
  //function responsible for redirecting to the delivery form
  const backToCart = () => {
    setCart(true)
    setPaymentData(false)
    setDeliveryData(false)
    setCheckout(false)
  }
  //responsible function return to the initial state of the cart
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
  // function to complete the purchase
  const sucessPayment = () => {
    dispatch(close())
    dispatch(clear())
    backToCart()
    navigate('/')
  }
  //function that checks the fields for errors
  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SideBar isVisible={cart}>
        {items.length < 1 ? (
          <p className="emptyCart">
            Você não possui nenhum produto no carrinho
          </p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
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
                </S.CartItem>
              ))}
            </ul>
            <S.CartDescription>
              <p>Valor total</p> <span>{formataPreco(getTotalPrice())}</span>
              <button className="buttonAdd" onClick={goToDelivery}>
                Continuar com a entrega
              </button>
            </S.CartDescription>
          </>
        )}
      </S.SideBar>
      <S.SideBar isVisible={deliveryData}>
        <S.Form onSubmit={form.handleSubmit}>
          <S.Title>Entrega</S.Title>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              onChange={form.handleChange}
              name="fullName"
              onBlur={form.handleBlur}
              className={checkInput('fullName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              onChange={form.handleChange}
              name="address"
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              onChange={form.handleChange}
              name="city"
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGrouping>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Numero</label>
              <input
                id="number"
                type="text"
                onChange={form.handleChange}
                name="number"
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.InputGrouping>
          <S.InputGroup className="magin-bottom">
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              id="reference"
              type="text"
              onChange={form.handleChange}
              name="reference"
              onBlur={form.handleBlur}
              className={checkInput('reference') ? 'error' : ''}
            />
          </S.InputGroup>
          <button className="buttonAdd" type="button" onClick={goToPayment}>
            Continuar com o pagamento
          </button>
          <button className="ButtonAdd" type="button" onClick={backToCart}>
            Voltar para o carrinho
          </button>
        </S.Form>
      </S.SideBar>
      <S.SideBar isVisible={paymentData}>
        <S.Form onSubmit={form.handleSubmit}>
          <S.Title>
            Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
          </S.Title>
          <S.InputGroup>
            <label htmlFor="cardOwner">Nome do cartão</label>
            <input
              id="cardOwner"
              type="text"
              onChange={form.handleChange}
              name="cardOwner"
              onBlur={form.handleBlur}
              className={checkInput('cardOwner') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGrouping>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.InputGroup maxWidht="86px">
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
            </S.InputGroup>
          </S.InputGrouping>
          <S.InputGrouping>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.InputGroup className="magin-bottom">
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
            </S.InputGroup>
          </S.InputGrouping>
          <button className="buttonAdd" type="submit" onClick={goToCheckout}>
            Finalizar pagamento
          </button>
          <button className="buttonAdd" type="button" onClick={goToDelivery}>
            Voltar para a edição de endereço
          </button>
        </S.Form>
      </S.SideBar>
      {isSuccess && data ? (
        <S.SideBar isVisible={checkout}>
          <S.Title>Pedido realizado - {data.orderId} </S.Title>
          <S.MessageContainer>
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
            <button className="buttonAdd" type="button" onClick={sucessPayment}>
              Concluir
            </button>
          </S.MessageContainer>
        </S.SideBar>
      ) : (
        <S.SideBar isVisible={checkout}>
          <S.Title> Erro na transação</S.Title>
          <p>Verifique os dados do cartão</p>
          <button className="buttonAdd" type="button" onClick={backToCart}>
            Voltar para o carrinho
          </button>
        </S.SideBar>
      )}
    </S.CartContainer>
  )
}
export default Cart
