import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from '../reducers/reducers'
import { fetchPeopleData } from '../actions/actions'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: true,
})

store.dispatch(fetchPeopleData())

export default store


