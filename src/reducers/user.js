const initialState = {
  username: "srayner297",
  fullname: "Steve Rayner",
  initials: "S R"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER_UPDATED": {
      const { fullname, initials } = action.payload;
      return { ...state, fullname, initials };
    }
    default: {
      return { ...state };
    }
  }
};

export default user;
