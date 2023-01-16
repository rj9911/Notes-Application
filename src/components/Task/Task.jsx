import React from 'react'
import "./Task.css"

const Task = ({title , description, deleteTask ,index}) => {
  // Directly function deleteTask is called or function named deleteTask can be initialized.  

  return (
    <div className="task">
        <div>
        <p>{title}</p>
        <span>{description}</span>
        </div>
        <button onClick={() => deleteTask(index)}>-</button>
    </div>
  )
}

export default Task;