import React from "react";
import Card2Task from "./Card2Task";
const TaskCard2Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Card2Task
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskCard2Tasks;
