import React from 'react'
import Card from './UI/Card'
import OngoingTaskItem from './OngoingTaskItem'
import { useSelector } from 'react-redux'

const OngoingTasks = () => {

    const ongoingTasks = useSelector(state => state.tasks.ongoingTasks)

    return (
    <Card>
        <h2>Задачи в работе</h2>
        <ul>
            {ongoingTasks && ongoingTasks.map(item => {
                return <OngoingTaskItem key={item.id} item={item}/>
            })}
        </ul>
    </Card>
  )
}

export default OngoingTasks