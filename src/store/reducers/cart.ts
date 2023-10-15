import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const product = state.items.find((item) => item.id == action.payload.id)
      if (product === undefined) {
        state.items.push(action.payload)
      } else {
        alert('o produto ja esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})
export const { add, close, open, remove, clear } = cartslice.actions
export default cartslice.reducer
