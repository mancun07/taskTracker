import React from 'react'
import { useDispatch } from 'react-redux';
import { addOnGoingTask, removeTask, addCompletedTask } from '../features/taskSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import {motion} from 'framer-motion';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <motion.li initial={{x: '-100vw', scale: 2}} animate={{ x: 0, scale: 1 }}>
        <span>{props.item.task}</span>
        <IconButton aria-label="add to shopping cart">
          < ArrowForwardIcon  onClick={addOngoingTaskHandler} sx={{ color: pink[500] }}/>
        </IconButton>
        {/* <IconButton aria-label="delete">
           <CheckIcon onClick={addCompletedTaskHandler}/>
        </IconButton> */}
        {/* <Button variant="contained" onClick={removeTaskHandler}>Уд.</Button> */}
        <IconButton aria-label="delete">
           <DeleteIcon onClick={removeTaskHandler} sx={{ color: green[500] }}/>
        </IconButton>
        {/* <Checkbox {...label} /> */}
    </motion.li>
  )
}

export default TaskItem