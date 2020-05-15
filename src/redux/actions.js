import { ActionTypes } from './types'
import { apiCall } from '../api/api';

export const setReduxSearchField = (text) => ({
  type: ActionTypes.CHANGE_SEARCH_FIELD,
  payload: text
})

export const fetchRobotsStart = () => ({
  type: ActionTypes.FETCH_ROBOTS_START
})

export const fetchRobotsStartAsync = () => (dispatch) => {
    dispatch(fetchRobotsStart());
    apiCall(`https://jsonplaceholder.typicode.com/users`)
      .then(data => dispatch(fetchRobotsSuccess(data)))
      .catch(error => dispatch(fetchRobotsFailure(error)))
}

export const fetchRobotsSuccess = robots => ({
  type: ActionTypes.FETCH_ROBOTS_SUCCESS,
  payload: robots
});

export const fetchRobotsFailure = errorMessage => ({
  type: ActionTypes.FETCH_ROBOTS_FAILURE,
  payload: errorMessage
})
