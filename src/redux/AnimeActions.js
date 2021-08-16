import axios from "axios";
import { GET_ANIME, GET_ANIME_FAILURE, GET_ANIME_SUCCESS } from "./constants";

export const getAnimes = () => ({ type: GET_ANIME });

export const getAnimeSuccess = (animes) => ({
  type: GET_ANIME_SUCCESS,
  payload: animes,
});

export const getAnimeFailure = (error) => ({
  type: GET_ANIME_FAILURE,
  payload: error,
});

export const fetchAnimes = (term) => {
  return async (dispatch) => {
    try {
      if (term === undefined) {
        dispatch(getAnimes);
        const response = await axios.get(
          "https://api.jikan.moe/v3/search/manga?q=naruto&limit=16"
        );
        const animes = await response.data.results;
        dispatch(getAnimeSuccess(animes));
      } else {
        dispatch(getAnimes);
        const response = await axios.get(
          `https://api.jikan.moe/v3/search/manga?q=${term.toLowerCase()}&limit=16`
        );
        const animes = await response.data.results;
        dispatch(getAnimeSuccess(animes));
      }
    } catch (error) {
      const errorMsg = error.message;
      dispatch(getAnimeFailure(errorMsg));
    }
  };
};

// export const fetchAnime = (term) => {
//   return async (dispatch) => {
//     try {
//       if (term) {
//         dispatch(getAnimes);
//         console.log(term);
//         const response = await axios.get(
//           `https://api.jikan.moe/v3/search/manga?q=${term.toLowerCase()}&limit=16`
//         );
//         const animes = await response.data.results;
//         dispatch(getAnimeSuccess(animes));
//       }
//     } catch (error) {
//       const errorMsg = error.message;
//       dispatch(getAnimeFailure(errorMsg));
//     }
//   };
// };
