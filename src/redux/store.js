import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/taskSlice";
import userReducer from "./features/user/userSlice";
import baseApi from "./features/api/basaApi";

const store = configureStore({
  reducer: {
    taskSlice: tasksReducer,
    userSlice: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
