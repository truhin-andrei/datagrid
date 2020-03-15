import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  RECEIVE_DATA,
  SEARCH_TEXT,
 
} from '../actions/actions'
import store from '../store/store'


const initialState = {

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
      case SEARCH_TEXT:
      return Object.assign({}, state, {
        query: action.query,
        filteredPeople: filter(action.query, state.people, action.keyData)
      })
    default:
      return state
  }
}

function filter(query, array, keyData){
  return array.filter(
    item => 
     item[keyData].toLowerCase().indexOf(query.toLowerCase()) + 1
  );
}

const reducers = combineReducers({
  peopleData,
  //filteredData
})

export default reducers