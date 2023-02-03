
import './App.css';
import Fun from './Fun';
import Inputdata from './Inputdata';
//import Condition from './Condition';
import List from './List';
import Listkey from './Listkey';
import Style from './Style';
//import Parent from './Parent1';
//import Parent2 from './Parent2';

function App() {
  return (
    <div className="App">
    <Inputdata/>
    <Style/>
    <Fun/>
    <Listkey/>
    {/* <Parent2/>
    <Parent/> */}
     <List/>
     {/* <Condition/> */}
    </div>
  );
}

export default App;
