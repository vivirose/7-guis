import logo from './logo.svg';
import './App.css';
import Counter from './GUIS/Counter/Counter';
import TempConverter from './GUIS/TempConverter/TempConverter';
import FlightBooker from './GUIS/FlightBooker/FlightBooker';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TempConverter/>
      <FlightBooker/>
    </div>
  );
}

export default App;
