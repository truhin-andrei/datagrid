import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  RECEIVE_DATA,
  SEARCH_TEXT,
  SORT_NUMBER
} from '../actions/actions'
import store from '../store/store'


const initialState = {

}

function peopleData(state = initialState, action) {
  switch (action.type) {
   
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        people: action.people,
        filteredPeople: action.people
      });
      case SEARCH_TEXT:
      return Object.assign({}, state, {
        query: action.query,
        filteredPeople: filter(action.query, [...state.people], action.keyData)
      });
      case SORT_NUMBER:
      return Object.assign({}, state, {
        direction: action.direction,
        filteredPeople: sortNumber(action.direction, [...state.filteredPeople], action.keyData)
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

function sortNumber(direction, array, keyData){
  console.log(36, direction, keyData)
  return array.sort(
    (item1, item2) => 
    direction ? item1[keyData]-item2[keyData] : item2[keyData]-item1[keyData]
  );
}

const reducers = combineReducers({
  peopleData,
  //filteredData
})

export default reducers