import React from 'react';

const TaskSingle = (props) => {
      const task = props.task;
      const index = props.index;
      // const taskChange = (index) => {
      //       props.taskListChange(index)
      // }

  return (
      <>
      <td >{index+1}</td>
      <td >
      {task.status === 'pending' ? task.title : <del>{task.title}</del>}
      </td>
      <td onClick={() => props.taskListChange(index)}>
            {
                  task.status === 'pending' && 
                  <span className='badge-info'>Pending</span>
            }
            {
                  task.status === 'done' &&
                  <span className='badge-success'>Done</span>
            }
      </td>
      </>
  )
};

export default TaskSingle;
