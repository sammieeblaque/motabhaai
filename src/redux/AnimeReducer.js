import { GET_ANIME, GET_ANIME_FAILURE, GET_ANIME_SUCCESS } from "./constants";
const initialState = {
  animes: [],
  loading: false,
  error: "",
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        loading: true,
      };
    case GET_ANIME_SUCCESS:
      return {
        loading: false,
        animes: action.payload,
        error: "",
      };
    case GET_ANIME_FAILURE:
      return {
        loading: false,
        animes: [],
        error: "",
      };
    default:
      return state;
  }
};

export default animeReducer;
