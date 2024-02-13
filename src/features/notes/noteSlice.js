import { createSlice } from '@reduxjs/toolkit';
import { createNote, updateNote } from './noteAction';


const initialState = {
  loading: false,
  data: null,
  error: null,
  success: false, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // logout: (state) => {
    //   localStorage.removeItem("token");
     
    //   state.loading = false;
    //   state.userInfo = null;
    //   state.userToken = null;
    //   state.error = null;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(createNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNote.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload
        // state.userInfo = payload;
        // state.userToken = payload.userToken;
      })
      .addCase(createNote.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNote.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        // state.signupInfo = payload.data;
      })
      .addCase(updateNote.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
