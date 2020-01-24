import {
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS,
  FETCHING_ACTIVITY_FAILURE
} from '../actions'

const initialState = {
  totalSpells: 0,
  spells: [
    {
      id: 0,
      name: "Acid Arrow",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Instantaneous",
      level: 2,
      school: {name: "Evocation", url: "/api/magic-schools/evocation"},
      description: ["A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."],
      higher_level: ["When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."]
    },
  ]
}

export const spellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ACTIVITY_START:
      return {
        ...state,
        isLoading: true
      }

    case FETCHING_ACTIVITY_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        totalSpells: state.totalSpells++,
        spells: [...state.spells,
          {
            id: Date.now(),
            name: action.payload.name,
            range: action.payload.range,
            casting_time: action.payload.casting_time,
            components: action.payload.components,
            duration: action.payload.duration,
            level: action.payload.level,
            school: action.payload.school,
            description: action.payload.desc,
            higher_level: action.payload.higher_level,
          }
        ]
      }
    case FETCHING_ACTIVITY_FAILURE:
      return {
        ...state
      }

    default:
      return state
  }
}