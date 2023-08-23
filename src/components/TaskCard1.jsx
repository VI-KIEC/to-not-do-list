import React from "react";
import TaskCard1Title from "./TaskCard1/TaskCard1Title";
import TaskCard1AddInput from "./TaskCard1/TaskCard1AddInput";
import TaskCard1Tasks from "./TaskCard1/TaskCard1Tasks";

const TaskCard1 = () => {
  return (
    <div className="taskCard">
      <TaskCard1Title />
      <TaskCard1AddInput />
      <TaskCard1Tasks />
    </div>
  );
};

export default TaskCard1;
