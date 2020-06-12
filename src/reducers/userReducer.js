import { ADD_USER, DELETE_USER } from "../actions/actionTypes";

const initialState = {
  users: [
    {
      name: "Aaron",
      id: 1,
    },
    {
      name: "Declan",
      id: 2,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      // create a new array based off of the existing state
      let filteredArray = state.users.filter((user) => {
        if (user.id != action.payload) {
          return user;
        }
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
