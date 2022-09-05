import React,{useState}  from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import  './Todo.css';

function ToDo() {
  const [task,settask] = useState([
   
  ])
  const addtask = (title) =>{
    const newtask = [...task,{title}]
    settask(newtask);

  }

  const removetask=(index) =>{
    const newtask =[...task]
    newtask.splice(index,1)
    settask(newtask)
  }
 

  return (
    <>
      <div className='todo-container'>
        <div className='header'>todo app</div>
        <div className='addtask'>
          <AddTask addtask= {addtask}/>
        </div>
        <div className="tasks">
          {task.map((tasks,index)=><ListTask task={tasks} removetask={removetask} key={index}
          index={index}
          />)}
          
        </div>

  


      </div>
    </>
  )
}

export default ToDo