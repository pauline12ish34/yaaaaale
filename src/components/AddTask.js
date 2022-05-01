
import {useState} from 'react'


const AddTask = ({onAdd}) => {
  const [text,setText] = useState(' ')
  const [day, setDay]= useState(' ')
  const [reminder, setReminder]= useState(false)
const onSubmit=(e)=>{
  e.preventDefault()
  if(!text||!day){
    alert('please add task and Day')
    return
  }
  onAdd({text,day,reminder})
  setText('') 
  setDay('')
  setReminder(false)

}

  return (
    <form onSubmit={onSubmit}>
        <div className='m-5'> 
            <label htmlFor="Task">Task</label>
            <input type="text"
            value={text} onChange={(e)=>{setText(e.target.value)}}
            className=' border rounded w-full py-2 px-3 text-gray-700 ' placeholder='Add Task' />
        </div>



        <div className='m-5'>
            <label htmlFor="day">Day& Time</label>
            <input type="text" value={day} 
            onChange={(e)=>{setDay(e.target.value)}} placeholder='Add Day & time' 
            className='border rounded w-full  py-2 px-3 text-gray-700'/>
        </div>

        <div className='m-5'>
            <label htmlFor="Reminder" >Reminder</label>
            <input type="checkbox" checked={reminder}
            value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}
            placeholder='Add Task' className='ml-5'/>
        </div>
        <input type='submit' className='border rounded bg-black text-slate-100 p-2  ml-5  py-2 md:ml-80 md:w-1/6' value="Save Task" />
    </form>
  )
}

export default AddTask