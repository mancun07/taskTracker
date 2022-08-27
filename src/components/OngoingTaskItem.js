import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOnGoingTask, addCompletedTask} from '../features/taskSlice';

const OngoingTaskItem = (props) => {

    const dispatch = useDispatch();


  const addOnCompletedTaskHandler = () => {
    dispatch(removeOnGoingTask(props.item.id))  
    dispatch(addCompletedTask(props.item))
  }

  const removeTaskHandler = () => {
    dispatch(removeOnGoingTask(props.item.id))  
  }

  return (
    <li>
        <span>{props.item.task}</span>
        <button onClick={addOnCompletedTaskHandler}>Вып-но</button>
        <button onClick={removeTaskHandler}>Уд.</button>
    </li>
  )
}

export default OngoingTaskItem