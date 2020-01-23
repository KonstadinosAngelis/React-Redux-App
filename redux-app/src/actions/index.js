import axios from 'axios'

export const FETCHING_ACTIVITY_START =  'FETCHING_ACTIVITY_START'
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS'
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE'

export const getSpells = () => dispatch => {
  // dispatch({ type: FETCHING_ACTIVITY_START});
  // axios.get(`http://www.dnd5eapi.co/api/spells/acid-arrow`)
}