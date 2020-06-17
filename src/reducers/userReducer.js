import { ADD_USER, DELETE_USER, FETCH_USERS } from "../actions/actionTypes";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      // create a new array based off of the existing state
      let filteredArray = state.users.filter((user) => {
        return user.id !== action.payload ? user : null;
      });
      return {
        ...state,
        users: filteredArray,
      };
    // filter out the items that don't match the action.payload (the ID passed in)

    default:
      return state;
  }
}
