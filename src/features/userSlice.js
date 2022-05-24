import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    login: (state, action) => {
      const userDataIndex = state.user.findIndex((i) => i.email === action.payload.email);
      if (userDataIndex) {
          state.user[userDataIndex].loggedIn = true;
      }
    },
    logout: (state, action) => {
      state.user = null;
    },
    signup: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { login, logout, signup } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
