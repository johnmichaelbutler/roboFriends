import { ActionTypes } from './types';

const initialStateSearch = {
  searchField: ''
}

const initialStateRobots = {
  robots: [],
  isFetching: false,
  errorMessaage: null
}

export const searchRobots = (state = initialStateSearch, action={}) => {
  switch(action.type) {
    case ActionTypes.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }

    default:
      return state
  }
}

export const requestRobots = (state = initialStateRobots, action={}) => {
  switch(action.type) {
    case ActionTypes.FETCH_ROBOTS_START:
      return {
        ...state,
        isFetching: true
      }

    case ActionTypes.FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isFetching: false
      }

    case ActionTypes.FETCH_ROBOTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }

      default:
        return state
  }
}