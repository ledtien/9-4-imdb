import * as types from "../constants/movie.constants";

const initialState = {
  movies: [],
  loading: false,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // const { type } = action;

  switch (type) {
    case types.FETCH_START:
    case types.FETCH_SUCCESS:
      return {
        ...state,
        movies: payload,
      };
    case types.FETCH_FAILURE:
    default:
      return state;
  }
};

export default movieReducer;
