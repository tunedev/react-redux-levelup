import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export const loadAuthorSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return async dispatch => {
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
};
