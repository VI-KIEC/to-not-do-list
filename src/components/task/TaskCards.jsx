import React, { useState } from "react";

import AddTaskCardButton from "./ button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: 0, draggableId: "item0" },
  ]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCard) => (
        <TaskCard
          setTaskCardsList={setTaskCardsList}
          taskCardsList={taskCardsList}
          taskCard={taskCard}
          key={taskCard.id}
        />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards;
