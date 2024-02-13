import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice"
import noteReducer from './features/notes/noteSlice';

const store = configureStore({
    reducer: {
      user: userReducer,
      note: noteReducer,
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  
  export default store