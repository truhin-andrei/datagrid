import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actions/actions'


const initialState = {
  people1: {
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

function peopleData(state = initialState, action) {
  switch (action.type) {
   
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        people: action.people,
      })
    default:
      return state
  }
//   switch (action.type) {
//     case FETCH_DATA:
//       return Object.assign({}, state, action.newPeople )
//     default:
//       return state
//   }
 }

const reducers = combineReducers({
  peopleData,
  
})

export default reducers