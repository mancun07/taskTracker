import React, {Fragment, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRemark } from '../features/taskSlice';
import { toggleRemarkState } from '../features/uiSlice';
import Backdrop from './UI/Backdrop';
import classes from './NewRemark.module.css'

const NewRemark = () => {

  const chosenTask = useSelector(state => state.tasks.chosenTask);

  const [remark, setRemark] = useState(chosenTask.remark);

    const inputRef = useRef();
    const dispatch = useDispatch(); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const inputRefValue = inputRef.current.value;
        // console.log(inputRefValue);
        dispatch(addRemark(remark));
        dispatch(toggleRemarkState());
    }

    const onCloseHandler = () => {
      dispatch(toggleRemarkState());
    }

  return (
    <div className={classes.remark}>
        <div className={classes.notes}>Пометки к задаче</div>
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <textarea ref={inputRef} value={remark} onChange={e => setRemark(e.target.value)} rows="10" cols="45" name="text"></textarea>
            <button className={classes.btn}>Добавить</button>
        </form>
        <div className={classes.close} onClick={onCloseHandler}>X</div>
    </div>

  )
}

export default NewRemark