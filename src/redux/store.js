import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/taskSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    taskSlice: tasksReducer,
    userSlice: userReducer,
  },
});

export default store;
