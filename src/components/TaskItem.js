import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOnGoingTask, removeTask, addCompletedTask, saveClickedTask } from '../features/taskSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import AppleIcon from '@mui/icons-material/Apple';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import {motion} from 'framer-motion';
import { toggleRemarkState } from '../features/uiSlice';
import NewRemark from './NewRemark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TaskItem = (props) => {

  const dispatch = useDispatch();

  const remarkIsShown = useSelector(state => state.ui.remarkIsShown)

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

  const openRemarkHandler = () => {
    dispatch(toggleRemarkState())
    dispatch(saveClickedTask(props.item))
  }


  return (
    <Fragment>
      <motion.li initial={{x: '-100vw', scale: 2}} animate={{ x: 0, scale: 1 }}>
          <span onClick={openRemarkHandler}>{props.item.task}</span>
          <IconButton onClick={addOngoingTaskHandler} aria-label="add to shopping cart">
            < ArrowForwardIcon   sx={{ color: yellow[500] }}/>
          </IconButton>
          {/* <IconButton aria-label="delete">
            <CheckIcon onClick={addCompletedTaskHandler}/>
          </IconButton> */}
          {/* <Button variant="contained" onClick={removeTaskHandler}>Уд.</Button> */}
          <IconButton onClick={removeTaskHandler} aria-label="delete">
            <DeleteIcon sx={{ color: green[500] }}/>
          </IconButton>
          {/* <Checkbox {...label} /> */}
          {/* <IconButton onClick={openRemarkHandler} aria-label="delete">
            <AppleIcon  sx={{ color: yellow[500] }}/>
          </IconButton> */}
      </motion.li>
      {/* {remarkIsShown && <NewRemark />} */}
    </Fragment>

  )
}

export default TaskItem