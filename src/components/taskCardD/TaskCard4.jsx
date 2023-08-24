import React, { useState } from "react";
import TaskCard4Title from "./TaskCard4Title";
import TaskCard4AddInput from "./TaskCard4AddInput";
import TaskCard4Tasks from "./TaskCard4Tasks";

const TaskCard4 = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard taskCard4">
      <TaskCard4Title />
      <TaskCard4AddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskCard4Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard4;
