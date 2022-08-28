import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  ongoingTasks: [],
  completedTasks: []
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload)
      console.log(state.tasks)
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(el => el.id !== action.payload)
    },
    addOnGoingTask: (state, action) => {
      state.ongoingTasks.push(action.payload)
    },
    removeOnGoingTask: (state, action) => {
      state.ongoingTasks = state.ongoingTasks.filter(el => el.id !== action.payload)
    },
    addCompletedTask: (state, action) => {
      state.completedTasks.push(action.payload)
    },
    removeCompletedTask: (state, action) => {
      state.completedTasks = state.completedTasks.filter(el => el.id !== action.payload)
    },
    updateRedux: (state, action) => {
      console.log(action.payload)
      state.tasks = action.payload.tasks
      state.ongoingTasks = action.payload.ongoingTasks
      state.completedTasks = action.payload.completedTasks

    }
  },
})


export const {addTask, removeTask, addOnGoingTask, removeOnGoingTask, addCompletedTask, removeCompletedTask, updateRedux } = taskSlice.actions;


export default taskSlice.reducer;
