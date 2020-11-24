import { LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS } from "../actions/people";

const initialState = {
  loading: false,
  list: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PEOPLE:
      return {
        ...state,
        loading: true,
      }
    case LOAD_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.payload.results],
      }
    default:
      return state;
  }
}

export default peopleReducer;
