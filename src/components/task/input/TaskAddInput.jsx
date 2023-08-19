import React from "react";

const TaskAddInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" className="taskAddInput" />
      </form>
    </div>
  );
};

export default TaskAddInput;
