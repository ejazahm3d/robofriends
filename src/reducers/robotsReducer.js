import { GET_ROBOTS } from "../actions/types";

const initialState = {
  robots: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROBOTS:
      return { ...state, robots: payload };

    default:
      return state;
  }
};
