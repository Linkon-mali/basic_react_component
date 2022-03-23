import React, { useState } from 'react';
import TaskSingle from './TaskSingle';

const TaskList = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete map() of Javascript',
      status: 'done'
  },
  {
      id: 2,
      title: 'Display List in View',
      status: 'pending'
  },
  {
      id: 3,
      title: 'Final Video Tutorial',
      status: 'pending'
  }
  ]);

  const taskListChange = (index) => {
    // change status
    const updateTasks = []
    tasks.map((task, idx) => {
      if(idx === index){
        console.log(task);
        task.status = task.status === 'pending' ? 'done' : 'pending'
      }
      updateTasks.push(task);
    });
    setTasks(updateTasks)
  }
   
  return <div>
    {
      tasks.length > 0 && 
      <table>
          <thead>
              <tr>
                  <th>Sl</th>
                  <th>Title</th>
                  <th style={{width: '200px'}}>Status</th>
              </tr>
          </thead>
          <tbody>
              {
                  tasks.map((task, index) => (
                    <tr key={index}>
                      <TaskSingle 
                      task={task}
                      index={index}
                      taskListChange={taskListChange}
                      />
                    </tr>
                  ))
              }
          </tbody>
      </table>
    }
    {
      tasks.length === 0 &&
      <div>Sorry! No task found</div>
    }
  </div>;
};

export default TaskList;
