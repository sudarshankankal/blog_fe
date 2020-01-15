import getAxiosClient from "../services/getAxiosClient";

import { FETCH_POSTS, FETCH_USER } from "../../constants/actionTypes";

export const fetchPosts = () => async dispatch => {
  const response = await getAxiosClient.get("/posts");

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  debugger;
  const response = await getAxiosClient.get(`users/${id}`);

  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};
