import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCompletedTask} from '../features/taskSlice';

const CompletedTaskItem = (props) => {

    const dispatch = useDispatch();



  const removeTaskHandler = () => {
    dispatch(removeCompletedTask(props.item.id))  
  }

  return (
    <li>
        <span>{props.item.task}</span>
        <button onClick={removeTaskHandler}>Уд.</button>
    </li>
  )
}

export default CompletedTaskItem