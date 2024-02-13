import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer: {
      user: userReducer,
    //   project: projectReducer,
    //   task: taskReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  
  export default store