import './App.css';
import MyComponent from './Components/classBased';
import FunctionalCmp from './Components/Functional';
import JsxDemo from './LearnJSX/JsxDemo';
import LifeCycleDemo from './LifeCycle/LifeCycleDemo';
import Parent from './PropsDemo/Parent';
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
      <Parent/>
      <hr/>
      
    </div>
  );
}

export default App;
