import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userInfo: {
  },
  accessToken: '',
  isAdmin: false,
  isAnonymousCustomer: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: async (state, action) => {
      const { username, password } = action.payload;

      const response = await axios.get(`${apiBaseUrl}/products/`, {
        username, password
      });

      //TODO: CHECK NULL DATA
      state.isAdmin = response.data.user.role === 'system' ? true : false;
      state.isAnonymousCustomer = false;
      state.userInfo = response.data.user;
      state.accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', response.data.accessToken);

    },
    userLoggedOut: (state) => {
      state.userInfo = {};
      state.isAdmin = false;
      state.accessToken = null;
      state.isAnonymousCustomer = true;
      localStorage.removeItem('accessToken');
    },

  },
});

export const {
  userLoggedIn,
  userLoggedOut,
} = userSlice.actions;


export default userSlice.reducer;
