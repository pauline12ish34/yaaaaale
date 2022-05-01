import React from 'react'
import {FaTimes} from  'react-icons/fa'

const Task = ({task, onDeletee, onToggle}) => {
  return (
    <div className={`bg-slate-200 m-2 mx-12 p-5 ${task.reminder ? 'border-l-4 border-teal-600 ':''}`} onDoubleClick={() =>onToggle(task.id)}>
<h1 className='text-xl grid grid-cols-2 '>{task.text} <div><FaTimes className='float-right m-12' style={{color:'red',cursor: 'pointer'}} onClick={() => onDeletee(task.id)}/></div></h1>
<p>{task.day}</p>

    </div>
  )
}

export default Task