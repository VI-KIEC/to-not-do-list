import React, { useState } from "react";
import TaskCard2Title from "./TaskCard2Title";
import TaskCard2AddInput from "./TaskCard2AddInput";
import TaskCard2Tasks from "./TaskCard2Tasks";

const TaskCard2 = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard taskCard2">
      <TaskCard2Title />
      <TaskCard2AddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskCard2Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard2;
