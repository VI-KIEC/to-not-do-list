import React from 'react'

import TaskCardDeleteButton from './ button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'
import TaskCardTitle from './TaskCardTitle'

const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
