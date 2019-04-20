const initialState = {
  username: null,
  fullname: null,
  initials: null,
  token: null,
  refreshToken: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...action.payload.user };
    }
    case "LOGIN_FAILED":
    case "LOGOUT": {
      return { ...initialState };
    }
    case "USER_UPDATED": {
      const { fullname, initials } = action.payload.user;
      return { ...state, fullname, initials };
    }
    default: {
      return { ...state };
    }
  }
};

export default user;
