import api from "../data/api";

export function update(user) {
  return {
    type: "USER_UPDATED",
    payload: { user }
  };
}

export function verify(token) {
  return dispatch => {
    api
      .verify({ token })
      .then(response => {
        const { accessToken, refreshToken } = response.data;
        dispatch({
          type: "VERIFY_SUCCESS",
          payload: { accessToken, refreshToken }
        });
      })
      .catch(error => {
        dispatch({
          type: "VERIFY_FAILED"
        });
      });
  };
}
