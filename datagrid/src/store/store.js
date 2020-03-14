import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import reducers from '../reducers/reducers'
import { fetchPeopleData } from '../actions/actions'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

store.dispatch(fetchPeopleData())
console.log(15, store.getState())
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(FETCH_DATA)