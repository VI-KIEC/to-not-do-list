import React from "react";

const Card1Task = ({ task, setTaskList, taskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default Card1Task;
