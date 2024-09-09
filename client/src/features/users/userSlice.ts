import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit';
import { IUser } from '../../types/userTypes';

const usersAdapter = createEntityAdapter({
  selectId: (recipe: IUser) => recipe._id as EntityId,
});

const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signupUser: usersAdapter.addOne,
  },
});

export const { signupUser } = usersSlice.actions;
export default usersSlice.reducer;