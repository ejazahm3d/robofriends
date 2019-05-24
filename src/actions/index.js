import { CHANGE_SEARCH_FIELD } from "./types";
import axios from "axios";
import { GET_ROBOTS } from "./types";

// Search Field
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// Fetching the robots

export const fetchRobots = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: GET_ROBOTS,
    payload: response.data
  });
};
