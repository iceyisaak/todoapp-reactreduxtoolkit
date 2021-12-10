import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

export const initTasks = () => {
  const tasks = localStorage.setItem('tasks', JSON.stringify(initialState.tasks));
  return { tasks };
};


export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log('addTask()', taskEntry);
      const newTask = {
        id: uuidv4(),
        taskEntry: action.payload.taskEntry
      };
      state.push(newTask);
      console.log('addTask()', state);
    },
    editTask: (state) => {
      console.log('editTask()', state);
    },
    deleteTask: (state) => {
      console.log('deleteTask()', state);
    },
    deleteAllTasks: (state) => {
      state = null;
      console.log('deleteAllTask()', state);
    },
    findItem: (state) => {
      console.log('findItem()', state);
    }
  }
});


export const { addTask, editTask, deleteTask, deleteAllTasks, findItem } = TodoSlice.actions;

export default TodoSlice.reducer;