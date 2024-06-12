import React from 'react'

const ListTaskComponent = () => {
   const dummyData = [
      {
         "id":1,
         "nameOfTask": "task name1 ",
         "description": "task desc1",
         "day": 1,
         "time": "12:35",
         "email": "email@email.email"
     },
     {
         "id":2,
         "nameOfTask": "task name2 ",
         "description": "task desc2",
         "day": 2,
         "time": "11:15",
         "email": "email@email.email"
      },
      {
         "id":3,
         "nameOfTask": "task name3 ",
         "description": "task desc3",
         "day": 3,
         "time": "17:55",
         "email": "email@email.email"
      }
   ]




  return (
    <div className='container'>
      <h2 className='text-center'>List of Tasks</h2>
      <table className='table table-striped table-bordered'>
         <thead>
            <tr>
               <th>Task id</th>
               <th>Task name</th>
               <th>Task description</th>
               <th>Day</th>
               <th>Time</th>
               <th>Email</th>
            </tr>
         </thead>
         <tbody>
            {
               dummyData.map(task => 
                  <tr key = {task.id}>
                     <td>{task.id}</td>
                     <td>{task.nameOfTask}</td>
                     <td>{task.description}</td>
                     <td>{task.day}</td>
                     <td>{task.time}</td>
                     <td>{task.email}</td>
                  </tr>)
            }
         </tbody>
      </table>



    </div>
  )
}

export default ListTaskComponent