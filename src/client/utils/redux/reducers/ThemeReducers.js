import { CHANGE_THEME } from '../actions/ThemeActions'

export default function ThemeReducers(state = {}, action) {
  console.log(action.type)
  switch(action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme
      }
    default: return state
  }
}
