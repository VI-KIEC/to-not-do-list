import React, { useState } from "react";
import TaskCard1Title from "./TaskCard1Title";
import TaskCard1AddInput from "./TaskCard1AddInput";
import TaskCard1Tasks from "./TaskCard1Tasks";

const TaskCard1 = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard taskCard1">
      <TaskCard1Title />
      <TaskCard1AddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskCard1Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard1;
