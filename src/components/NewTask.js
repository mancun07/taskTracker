import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/taskSlice';
import classes from './NewTask.module.css'


const NewTask = () => {

  const taskRef = useRef(null);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  const submitHandler = (e) => {
    e.preventDefault();
    const taskRefValue = taskRef.current.value;

    if (taskRefValue === '') {
      alert('Блин, задачу введи!');
      return;
    }
    // localStorage.setItem('task', JSON.stringify({
    //   id: Math.random(),
    //   task: taskRefValue
    // }))
    dispatch(addTask({
      id: Math.random(),
      task: taskRefValue,
      remark: null
    }));
    taskRef.current.value = '';

  }

  return (
    <form className={classes[`new-task`]} onSubmit={submitHandler}>
      <input type="text" ref={taskRef}/>
      <button>Добавить задачу</button>
    </form>
  )
}

export default NewTask