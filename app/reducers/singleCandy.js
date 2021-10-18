import axios from "axios";

//ACTION TYPE
const SINGLE_CANDY = "SINGLE_CANDY";

// ACTION CREATOR
const _singleCandy = (candy) => {
  return {
    type: SINGLE_CANDY,
    candy,
  };
};
//THUNK CREATORS
export const fetchSingleCandy = (candyId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/candies/${candyId}`);
      dispatch(_singleCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};
//INITIAL STATE
const initialState = {};

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_CANDY:
      return action.candy;
    default:
      return state;
  }
};
