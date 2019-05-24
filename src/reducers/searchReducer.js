import { CHANGE_SEARCH_FIELD } from "../actions/types";

const initialState = {
  searchField: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };

    default:
      return state;
  }
};
