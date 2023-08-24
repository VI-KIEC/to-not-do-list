import LeftBar1 from "./components/sideBar/LeftBar1";
import LeftBar2 from "./components/sideBar/LeftBar2";
import UpperBar1 from "./components/sideBar/UpperBar1";
import UpperBar2 from "./components/sideBar/UpperBar2";
import TaskCard1 from "./components/taskCardA/TaskCard1";
import TaskCard2 from "./components/taskCardB/TaskCard2";
import TaskCard3 from "./components/taskCardC/TaskCard3";
import TaskCard4 from "./components/taskCardD/TaskCard4";

function App() {
  return (
    <div className="app">
      <div className="upperBarArea">
        <UpperBar1 />
        <UpperBar2 />
      </div>
      <div className="upperTaskCardArea">
        <LeftBar1 />
        <TaskCard1 />
        <TaskCard2 />
      </div>
      <div className="lowerTaskCardArea">
        <LeftBar2 />
        <TaskCard3 />
        <TaskCard4 />
      </div>
    </div>
  );
}

export default App;
