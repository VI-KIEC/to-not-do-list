import TaskCard1 from "./components/TaskCard1";
import TaskCard2 from "./components/TaskCard2";
import TaskCard3 from "./components/TaskCard3";
import TaskCard4 from "./components/TaskCard4";

function App() {
  return (
    <div className="app">
      <div className="upperTaskCardArea">
        <TaskCard1 />
        <TaskCard2 />
      </div>
      <div className="lowerTaskCardArea">
        <TaskCard3 />
        <TaskCard4 />
      </div>
    </div>
  );
}

export default App;
