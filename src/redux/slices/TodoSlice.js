import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};


export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (taskEntry) => {

    },
    editTask: (state) => {

    },
    deleteTask: (state) => {

    },
    deleteAllTasks: (state) => {

    },
    findItem: (state) => {

    }
  }
});


export const { addTask, editTask, deleteTask, deleteAllTasks, findItem } = TodoSlice.action;

export default TodoSlice.reducer;