import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/taskSlice';
import uiReducer from '../features/uiSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    ui: uiReducer
  },
});
