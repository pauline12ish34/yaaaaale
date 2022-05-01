import React from 'react'
import Task from './Task'
// import PropTypes from 'prop-types'
const Tasks = ({tasks,onDelete,onToggle}) => {
  
  return (
    <div>
{
    tasks.map((tas)=>(
    <Task key={tas.id} task={tas} onDeletee={onDelete} onToggle={onToggle}/>
    )
    )
}

    </div>
  )
}

export default Tasks