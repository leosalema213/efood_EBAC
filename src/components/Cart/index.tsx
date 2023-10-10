import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { close, remove } from '../../store/reducers/cart'
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
  InputGrouping
} from './style'
import lixeira from '../../assets/images/lixeira.png'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [goToCheckout, setGoToCheckout] = useState(false)
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
  const [confirmPayment, setConfirmPayment] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      number: 1,
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(4, 'o nome tem que ter mais de 4 caracteres')
        .required('este campo é obrigatório'),
      adress: Yup.string().required('este campo é obrigatório'),
      city: Yup.string().required('este campo é obrigatório'),
      cep: Yup.string()
        .max(8, 'O campo precisa ter 8 carcteres')
        .min(8, 'O campo precisa ter 8 carcteres')
        .required('este campo é obrigatório'),
      number: Yup.number().required('este campo é obrigatório'),
      complement: Yup.string().required('este campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        confirmPayment ? schema.required('O campo é obrigaotório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        confirmPayment ? schema.required('O campo é obrigaotório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        confirmPayment ? schema.required('O campo é obrigaotório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        confirmPayment ? schema.required('O campo é obrigaotório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        confirmPayment ? schema.required('O campo é obrigaotório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        product: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.fullName,
          adress: {
            city: values.city,
            complement: values.complement,
            number: values.number,
            zipCode: values.cep
          },
          payment: {
            card: {
              code: 1,
              expires: {
                year: 1,
                month: 1
              },
              name: '',
              number: '1'
            }
          }
        }
      })
    }
  })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        {goToCheckout ? (
          <Form onSubmit={form.handleSubmit}>
            {confirmPayment ? (
              <>
                <h2>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </h2>
                <InputGroup>
                  <label htmlFor="fullName">Nome do cartão</label>
                  <input
                    id="fullName"
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <InputGrouping>
                  <InputGroup>
                    <label htmlFor="cep">Número do cartão</label>
                    <input
                      id="cep"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidht="86px">
                    <label htmlFor="number">CVV</label>
                    <input
                      id="number"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </InputGrouping>
                <InputGrouping>
                  <InputGroup>
                    <label htmlFor="cep">Mês de vencimento</label>
                    <input
                      id="cep"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="magin-bottom">
                    <label htmlFor="number">Ano de vencimento</label>
                    <input
                      id="number"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </InputGrouping>
                <button
                  onClick={() => setConfirmPayment(true)}
                  className="buttonAdicionar"
                  type="submit"
                >
                  Finalizar pagamento
                </button>
                <button
                  onClick={() => setConfirmPayment(false)}
                  className="buttonAdicionar"
                  type="button"
                >
                  Voltar para a edição de endereço
                </button>
              </>
            ) : (
              <>
                <h2>Entrega</h2>
                <InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    id="adress"
                    type="text"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <InputGrouping>
                  <InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <input
                      id="cep"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Numero</label>
                    <input
                      id="number"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </InputGrouping>
                <InputGroup className="magin-bottom">
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <button
                  onClick={() => setConfirmPayment(true)}
                  className="buttonAdicionar"
                  type="button"
                >
                  Continuar com o pagamento
                </button>
                <button
                  onClick={() => setGoToCheckout(false)}
                  className="buttonAdicionar"
                  type="button"
                >
                  Voltar para o carrinho
                </button>
              </>
            )}
          </Form>
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
              <button
                onClick={() => setGoToCheckout(true)}
                className="buttonAdicionar"
              >
                Continuar com a entrega
              </button>
            </CartDescription>
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}
export default Cart
