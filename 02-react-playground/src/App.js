import './App.css';
import MyComponent from './Components/classBased';
import FunctionalCmp from './Components/Functional';
import LifeCycleDemo from './Components/LIFECycleDemo/LifeCycleDemo';
function App() {
  return (
    <div className="App">
      <h3>React Playground</h3>
      <hr>
      </hr>
      <MyComponent />
      <hr/>
      <FunctionalCmp />
      <hr/>
      <LifeCycleDemo />
    </div>
  );
}

export default App;
