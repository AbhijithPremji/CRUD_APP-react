import React,{useState} from 'react'

function AddTask({addtask}) {
    const[value,setvalue] = useState([])
    const additem = () =>{
      if ((typeof(value)=="string")&&(value !== " ")){
        addtask(value);
        setvalue([])}
        else
        alert("Enter task")
    }
 
 
  return (
    <div>
        <div className='input-container'>
            <input type = "text" className='input' placeholder='enter a new task'
            value={value}
            onChange={(e)=>{setvalue(e.target.value)}}
            />

            
            <button className='button' onClick={additem}>+</button>


        </div>
    </div>
  )
  }

export default AddTask