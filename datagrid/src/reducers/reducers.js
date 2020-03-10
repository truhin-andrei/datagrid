import { combineReducers } from 'redux'
import { FETCH_DATA } from '../actions/actions'

const initialState = {
  people: {
    "_id": "5e6107a6d5d3ee0d394bad23",
    "index": 0,
    "isActive": false,
    "balance": "$3,549.50",
    "age": 27,
    "eyeColor": "green",
    "name": "Lakisha Cooke",
    "gender": "female",
    "email": "lakishacooke@eyeris.com",
    "phone": "+1 (949) 592-2398",
    "registered": "2018-02-18T02:19:06 -07:00"
  }
}

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {newItem: 38} )
    default:
      return state
  }
}

const reducers = combineReducers({
  dataReducer,
  
})

export default reducers