import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOnGoingTask, addCompletedTask} from '../features/taskSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import {motion} from 'framer-motion';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <motion.li initial={{y: '-100vh'}} animate={{y: 0}}>
        <span>{props.item.task}</span>
        {/* <button onClick={addOnCompletedTaskHandler}>Вып-но</button> */}
        <IconButton aria-label="delete">
           <DeleteIcon onClick={removeTaskHandler}/>
        </IconButton>
        <Checkbox {...label}/>
    </motion.li>
  )
}

export default OngoingTaskItem