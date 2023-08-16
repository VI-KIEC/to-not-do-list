import React from 'react'

import AddTaskCardButton from './ button/AddTaskCardButton'
import TaskCard from './TaskCard'



const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}

export default TaskCards
