import './App.css';
import MyComponent from './Components/classBased';
import FunctionalCmp from './Components/Functional';

function App() {
  return (
    <div className="App">
      <h3>React Playground</h3>
      <hr>
      </hr>
      <MyComponent />
      <hr/>
      <FunctionalCmp />
    </div>
  );
}

export default App;
