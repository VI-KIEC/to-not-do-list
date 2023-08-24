import React from "react";
import TaskCard3Title from "./TaskCard3Title";
import TaskCard3Tasks from "./TaskCard3Tasks";
import TaskCard3AddInput from "./TaskCard3AddInput";
const TaskCard3 = () => {
  return (
    <div className="taskCard">
      <TaskCard3Title />
      <TaskCard3AddInput />
      <TaskCard3Tasks />
    </div>
  );
};

export default TaskCard3;
