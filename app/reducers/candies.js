import axios from "axios";

//ACTION TYPE
const ALL_CANDIES = "ALL_CANDIES";

// ACTION CREATOR
const _allCandies = (candies) => {
  return {
    type: ALL_CANDIES,
    candies,
  };
};
//THUNK CREATORS
export const fetchCandies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/candies");
      dispatch(_allCandies(data));
    } catch (error) {
      console.log(error);
    }
  };
};
//INITIAL STATE
const initialState = [];

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return action.candies;

    default:
      return state;
  }
};
