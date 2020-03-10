import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import * as reducers from '../reducers/reducers'
import { FETCH_DATA } from '../actions/actions'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(FETCH_DATA)