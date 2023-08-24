import React, { useState } from "react";
import TaskCard3Title from "./TaskCard3Title";
import TaskCard3AddInput from "./TaskCard3AddInput";
import TaskCard3Tasks from "./TaskCard3Tasks";

const TaskCard3 = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard taskCard3">
      <TaskCard3Title />
      <TaskCard3AddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskCard3Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard3;
