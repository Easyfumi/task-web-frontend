import React, { useDebugValue, useEffect, useState } from 'react'
import { createTask, getTask, updateTask } from '../services/TaskService'
import { useNavigate, useParams } from 'react-router-dom'

const TaskComponent = () => {


   const [nameOfTask, setNameOfTask] = useState('')
   const [description, setDescription] = useState('')
   const [day, setDay] = useState('')
   const [time, setTime] = useState('')
   const [email, setEmail] = useState('')
   const {id} = useParams();

   const [errors, setErrors] = useState( {
      nameOfTask: '',
      description: '',
      day: '',
      time: '',
      email: ''
   })


   
   const navigator = useNavigate();

   useEffect(() => {
      if(id) {
         getTask(id).then((response) => {
            setNameOfTask(response.data.nameOfTask);
            setDescription(response.data.description);
            setDay(response.data.day);
            setTime(response.data.time);
            setEmail(response.data.email);
         }).catch(error => {
            console.error(error);
         })
      }
   }, [id])

   function saveOrUpdateTask(e) {
      e.preventDefault();
      if (validateForm()) {

         const task = {nameOfTask, description, day, time, email}

         console.log(task);

         if(id) {
            updateTask(id, task).then((response) => {
               console.log(response.data);
               navigator('/tasks')
            }).catch(error => {
               console.error(error);
            })
         } else {
         createTask(task).then((response) => {
         console.log(response.data);
         navigator('/tasks')
         }).catch(error => {
            console.error(error);
         })
      }
   }
   }

      function validateForm() {
      let valid = true;
      const errorsCopy = {... errors}
      if (nameOfTask.trim()) {
         errorsCopy.nameOfTask = '';
      } else {
         errorsCopy.nameOfTask = 'name is required';
         valid = false;
      }

      setErrors(errorsCopy);

      return valid;
   }
 
   function pageTitle(){
      if(id) {
         return <h2 className='text-center'>Update Task</h2>
      } else {
         return <h2 className='text-center'>Add Task</h2>
      }
   }


  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
               pageTitle()
            }
            <div className='card-body'>
               <form>

                  <div className='form-group mb-2'>
                     <label className='form-label'>NameOfTask:</label>
                     <input
                     type='text'
                     placeholder='Enter task name'
                     name='nameOfTask'
                     value={nameOfTask}
                     className={ `form-control ${ errors.nameOfTask ? 'is-invalid': ''}`}
                     onChange={(e) => setNameOfTask(e.target.value)}
                     ></input>
                     { errors.nameOfTask && <div className='invalid-feedback'>{errors.nameOfTask}</div> }
                  </div>

                  <div className='form-group mb-2'>
                     <label className='form-label'>descrition</label>
                     <input
                     type='text'
                     placeholder='Enter description'
                     name='description'
                     value={description}
                     className='form-control'
                     onChange={(e) => setDescription(e.target.value)}
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

                  <button className='btn btn-success' onClick={saveOrUpdateTask}>Submit</button>

               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default TaskComponent