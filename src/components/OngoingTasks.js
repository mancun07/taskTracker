import React from 'react'
import Card from './UI/Card'
import OngoingTaskItem from './OngoingTaskItem'
import { useSelector } from 'react-redux'
import classes from './OngoingTasks.module.css'

const OngoingTasks = () => {

    const ongoingTasks = useSelector(state => state.tasks.ongoingTasks)

    return (
    <div className={classes.ongoingTasks}>
    <Card>
        <h2>Задачи в работе</h2>
        <ul>
            {ongoingTasks && ongoingTasks.map(item => {
                return <OngoingTaskItem key={item.id} item={item}/>
            })}
        </ul>
        <div className={classes.label}>В работе</div>
    </Card>
    </div>
  )
}

export default OngoingTasks