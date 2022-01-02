import "./App.css";
import Counter from "./GUIS/Counter/Counter";
import TempConverter from "./GUIS/TempConverter/TempConverter";
import FlightBooker from "./GUIS/FlightBooker/FlightBooker";
import CRUD from "./GUIS/CRUD/CRUD";
import Timer from "./GUIS/Timer/Timer";

function App() {
  return (
    <div className="App">
      <header className="App_header">5 GUIS</header>
      <Counter />
      <TempConverter />
      <FlightBooker />
      <Timer />
      <CRUD />
    </div>
  );
}

export default App;
