import React from "react";
import Card1Task from "./Card1Task";
const TaskCard1Tasks = ({ taskList, setTaskList }) => {
  return (
    <div className="cardTaskArea">
      {taskList.map((task) => (
        <div>
          <Card1Task
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskCard1Tasks;
