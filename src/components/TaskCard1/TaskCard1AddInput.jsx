import React from "react";

const TaskCard1AddInput = () => {
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

export default TaskCard1AddInput;
