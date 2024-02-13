import { createSlice } from '@reduxjs/toolkit';
import { createNote, deleteNote, updateNote } from './noteAction';


const initialState = {
  loading: false,
  note: null,
  error: null,
  success: false, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder
      .addCase(createNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNote.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.note = payload
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
        state.note = payload
      })
      .addCase(updateNote.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      
      })
      .addCase(deleteNote.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.loading = false;
        state.success = true;
        state.note = payload
      })
      .addCase(deleteNote.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
