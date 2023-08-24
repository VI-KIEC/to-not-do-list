import React from "react";
import Card3Task from "./Card3Task";
const TaskCard3Tasks = ({ taskList, setTaskList }) => {
  return (
    <div className="cardTaskArea">
      {taskList.map((task) => (
        <div>
          <Card3Task
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskCard3Tasks;
