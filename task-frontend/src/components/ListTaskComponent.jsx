import React, {useEffect, useState} from 'react'
import { deleteTask, listTasks } from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

const ListTaskComponent = () => {
   
   const [tasks, setTasks] = useState([])

   const navigator = useNavigate()

   useEffect(() => {
   getAllTasks();
   }, []);

   function getAllTasks() {
      listTasks().then((response) => {
         setTasks(response.data);
      }).catch(error => {
         console.error(error);
      });
   }

   function addNewTask() {
      navigator('/add-task')
   }

   function updateTask(id) {
      navigator(`/edit-task/${id}`)
   }

   function removeTask(id) {
      console.log(id);
      deleteTask(id).then((response) => {
         getAllTasks();
      }).catch(error => {
         console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Tasks</h2>
      <button type="button" class="btn btn-info mb-2" onClick={addNewTask}>Add New Task</button>
      <table className='table table-striped table-bordered'>
         <thead>
            <tr>
               <th>Task id</th>
               <th>Task name</th>
               <th>Task description</th>
               <th>Day</th>
               <th>Time</th>
               <th>Email</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            {
               tasks.map(task => 
                  <tr key = {task.id}>
                     <td>{task.id}</td>
                     <td>{task.nameOfTask}</td>
                     <td>{task.description}</td>
                     <td>{task.day}</td>
                     <td>{task.time}</td>
                     <td>{task.email}</td>
                     <td>
                        <button className='btn btn-info' onClick={() => updateTask(task.id)}>Update</button>
                        <button className='btn btn-danger' onClick={() => removeTask(task.id)}
                           style={{marginLeft: '10px'}}
                           >Delete</button>
                     </td>
                  </tr>)
            }
         </tbody>
      </table>




    </div>
  )
}

export default ListTaskComponent