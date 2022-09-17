import React from 'react'

function ListTask({task,index,removetask}) {
  return (
    <>
        <div className='list'>
            {task.title} 
            <button onClick={()=>{removetask(index)}} className='del-btn'>Delete(X)</button>
        </div>
    </>
  )
}
//
export default ListTask