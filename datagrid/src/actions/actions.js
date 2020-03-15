
export const FETCH_DATA = 'FETCH_DATA';


// export function fetchData() {
//   return { type: FETCH_DATA, newPeople: {new: 59} }
// }

export const REQUEST_DATA = 'REQUEST_DATA'
function requestData() {
  return {
    type: REQUEST_DATA
  }
}

export const RECEIVE_DATA = 'RECEIVE_DATA'
function receivePosts(json) {
  return {
    type: RECEIVE_DATA,
    people: json 
  }
}

function fetchData() {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://raw.githubusercontent.com/truhin-andrei/fake_api/master/fakeDataBase1100.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

function shouldFetchPosts(state) {
  const people = state.people
  if (!people && !state.isFetching) {
    return true
  } else {
    return false
  } 
}

export function fetchPeopleData() {

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // Диспатчим thunk из thunk!
      return dispatch(fetchData())
    } else {
      // Дадим вызвавшему коду знать, что ждать нечего.
      return Promise.resolve()
    }
  }
}