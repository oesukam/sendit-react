import { TOGGLE_MENU } from '../actionTypes';
const initialState = {
  topMenu: false,
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        topMenu: !state.topMenu 
      }
    default:
      return state;
  }
}

export default rootReducer;
