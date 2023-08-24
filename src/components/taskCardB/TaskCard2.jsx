import React from "react";
import TaskCard2Title from "./TaskCard2Title";
import TaskCard2AddInput from "./TaskCard2AddInput";
import TaskCard2Tasks from "./TaskCard2Tasks";

const TaskCard2 = () => {
  return (
    <div className="taskCard">
      <TaskCard2Title />
      <TaskCard2AddInput />
      <TaskCard2Tasks />
    </div>
  );
};

export default TaskCard2;
