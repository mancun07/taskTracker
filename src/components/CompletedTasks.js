import React from 'react'
import CompletedTaskItem from './CompletedTaskItem'
import { useSelector } from 'react-redux'
import Card from './UI/Card'

const CompletedTasks = () => {

    const completedTasks = useSelector(state => state.tasks.completedTasks)

  return (
    <Card>
        <h2>Задачи выполнены</h2>
        <ul>
            {completedTasks && completedTasks.map(item => {
                return <CompletedTaskItem key={item.id} item={item}/>
            })}
        </ul>
    </Card>
  )
}

export default CompletedTasks