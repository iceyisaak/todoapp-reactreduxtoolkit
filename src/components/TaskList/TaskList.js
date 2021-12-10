// import { useTodoContext } from '../../contexts/TodoContext';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initTasks, initialState } from "../../redux/slices/TodoSlice";
import TaskItem from "./TaskItem.js/TaskItem";

import style from './TaskList.module.scss';

const TaskList = () => {

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    initTasks();
  }, []);

  return (
    <div className={`${style['TaskList']}`}>
      {tasks.length === 0 && <p className={`${style['no-task']}`}>+++ Task List is Empty +++</p>}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
