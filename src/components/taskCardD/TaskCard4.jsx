import React from "react";
import TaskCard4Title from "./TaskCard4Title";
import TaskCard4AddInput from "./TaskCard4AddInput";
import TaskCard4Tasks from "./TaskCard4Tasks";

const TaskCard4 = () => {
  return (
    <div className="taskCard">
      <TaskCard4Title />
      <TaskCard4AddInput />
      <TaskCard4Tasks />
    </div>
  );
};

export default TaskCard4;
