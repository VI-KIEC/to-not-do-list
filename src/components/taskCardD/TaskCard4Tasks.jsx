import React from "react";
import Card4Task from "./Card4Task";
const TaskCard4Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Card4Task
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskCard4Tasks;
