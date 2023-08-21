import React from "react";

import AddTaskCardButton from "./ button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCards = () => {
  return (
    <div className="taskCardsArea">
      <TaskCard /> {/*done*/}
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCards;
