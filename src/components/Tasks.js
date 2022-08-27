import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import Card from './UI/Card'


const Tasks = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  console.log(tasks)

  return (
    <Card>
    <h2>Задачи в работу</h2>
    <ul>
        {tasks && tasks.map(item => {
            return <TaskItem key={item.id} item={item}/>
        })}
    </ul>
    </Card>

  )
}

export default Tasks