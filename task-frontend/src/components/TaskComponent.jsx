import React, { useState } from 'react'

const TaskComponent = () => {


   const [taskName, setTaskName] = useState('')
   const [taskDescription, setTaskDescription] = useState('')
   const [day, setDay] = useState('')
   const [time, setTime] = useState('')
   const [email, setEmail] = useState('')
   



   function saveTask(e) {
      e.preventDefault();
         const task = {taskName, taskDescription, day, time, email}
      console.log(task);
   }
 



  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Task</h2>
            <div className='card-body'>
               <form>

                  <div className='form-group mb-2'>
                     <label className='form-label'>Task Name:</label>
                     <input
                     type='text'
                     placeholder='Enter task name'
                     name='taskName'
                     value={taskName}
                     className='form-control'
                     onChange={(e) => setTaskName(e.target.value)}
                     ></input>
                  </div>

                  <div className='form-group mb-2'>
                     <label className='form-label'>descrition</label>
                     <input
                     type='text'
                     placeholder='Enter description'
                     name='taskDescription'
                     value={taskDescription}
                     className='form-control'
                     onChange={(e) => setTaskDescription(e.target.value)}
                     ></input>
                  </div>

                  <div className='form-group mb-2'>
                     <label className='form-label'>day</label>
                     <input
                     type='text'
                     placeholder='Enter day'
                     name='day'
                     value={day}
                     className='form-control'
                     onChange={(e) => setDay(e.target.value)}
                     ></input>
                  </div>

                  <div className='form-group mb-2'>
                     <label className='form-label'>Time</label>
                     <input
                     type='text'
                     placeholder='Enter time'
                     name='time'
                     value={time}
                     className='form-control'
                     onChange={(e) => setTime(e.target.value)}
                     ></input>
                  </div>

                  <div className='form-group mb-2'>
                     <label className='form-label'>email:</label>
                     <input
                     type='text'
                     placeholder='Enter email'
                     name='email'
                     value={email}
                     className='form-control'
                     onChange={(e) => setEmail(e.target.value)}
                     ></input>
                  </div>

                  <button className='btn btn-success' onClick={saveTask}>Submit</button>

               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default TaskComponent