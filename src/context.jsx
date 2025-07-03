import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from './data'
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

import reducer from './reducer'
const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }
  // Increase action
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }

  // Increase action
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}