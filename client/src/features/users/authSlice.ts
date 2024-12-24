import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { UserRole } from '../../types/userTypes';

export interface UserPayload {
  _id: string;
  role: UserRole;
}

interface AuthState {
  token: string | null;
  user: UserPayload | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;

      const decodedToken = jwtDecode<UserPayload>(action.payload);
      state.user = {
        _id: decodedToken._id,
        role: decodedToken.role,
      };
    },
    clearAuthToken: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;
export default authSlice.reducer;