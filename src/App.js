import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react'

 const App = () => {
  const [showAddTask,setshowAddTask]= useState(false)

  const [tasks ,setTasks]=useState(
    [
        {  id:1,
            text:'Studying mathematics',
            day: 'Apr 21 at 1:30 pm ' ,
            reminder: true, 
          },
          {  id:2,
            text:'Studying physics',
            day: 'Apr 22 at 1:30 pm ' ,
            reminder: false, 
          },
          {  id:3,
            text:'Studying Networking',
            day: 'Apr 24 at 1:30 pm ' ,
            reminder: true, 
          },
    ]
)

const addTask=(task)=>{
const id= Math.floor(Math.random()*1000)+1

  console.log(id)

  const newTask= {id, ...task}

  setTasks(...tasks,newTask)

}

const deleteTask=(id)=>{
  // setTasks(tasks.map((task)=>task.id===id? {...task, reminder: !task.reminder}:task))
  setTasks(tasks.filter((task)=>task.id!==id))
// console.log('the deleted task is',id);
}
// deal with reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id? {...task, reminder: !task.reminder}:task))
  // console.log('the clicked double task is',id);
}

  return (
    <div className="border-solid border-2 border-gray-600 m-20" >
      <Header name="todo-tracker"showAdd={showAddTask}  show={()=>setshowAddTask(!showAddTask)}/>


      {showAddTask&& <AddTask onAdd={addTask}/>}
     {/* above is tenary without an else {showAddTask? <AddTask onAdd={addTask}/>: ''} */}
      {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'the are no tasks to show'}

    {/* <h1 >
      Hello world!
    </h1>  */}

    </div>

  )
}

export default  App