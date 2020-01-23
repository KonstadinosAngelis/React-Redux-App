import { 
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS,
  FETCHING_ACTIVITY_FAILURE
} from '../actions'

const initialState = {
  name: "Acid Arrow",
  level: 2,
  school: {name: "Evocation"},
  description: [],

}

export const spellsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_ACTIVITY_START:
      console.log(state)
      console.log(action.payload)
      return{
        ...state
      }

    default:
    return state
  }
}