import './App.css';
import MyComponent from './Components/classBased';
import FunctionalCmp from './Components/Functional';
import JsxDemo from './Components/LearnJSX/JsxDemo';
import LifeCycleDemo from './Components/LifeCycleDemo/LifeCycleDemo';
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
      <hr/>
      <JsxDemo/>
      <hr/>
    </div>
  );
}

export default App;
