import React from 'react'
import { useDispatch } from 'react-redux';
import { addOnGoingTask, removeTask, addCompletedTask } from '../features/taskSlice';

const TaskItem = (props) => {

  const dispatch = useDispatch();

  const addOngoingTaskHandler = () => {
    dispatch(removeTask(props.item.id))  
    dispatch(addOnGoingTask(props.item))
  }

  const addCompletedTaskHandler = () => {
    dispatch(removeTask(props.item.id))  
    dispatch(addCompletedTask(props.item))
  }

  const removeTaskHandler = () => {
    dispatch(removeTask(props.item.id))
  }


  return (
    <li>
        <span>{props.item.task}</span>
        <button onClick={addOngoingTaskHandler}>В раб.</button>
        <button onClick={addCompletedTaskHandler}>Вып.</button>
        <button onClick={removeTaskHandler}>Уд.</button>
    </li>
  )
}

export default TaskItem