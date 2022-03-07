import './App.css';
import ErrorBoundaryDemo from './ErrorBoundaryDemo/ErrorBoundaryDemo';
import ErrorBoundary from './HighOrderComponent/ErrorBoundary';
//  import MyComponent from './Components/classBased';
//  import FunctionalCmp from './Components/ Functional';
//  import JsxDemo from './LearnJSX/JsxDemo';
//  import LifeCycleDemo from './LifeCycle/LifeCycleDemo';
//  import Parent from './PropsDemo/Parent';
// import SequenceRow from './SequenceLogic/sequenceRow';
function App() {
  return (
    <div className="App">
      <h3>React Playground</h3>
      <hr>
      </hr>
      <ErrorBoundary>
      <ErrorBoundaryDemo/>
      </ErrorBoundary>      
       {/* <MyComponent />
      <hr/>
      <FunctionalCmp />
      <hr/>
      <LifeCycleDemo />
      <hr/>
      <JsxDemo/>
      <hr/>
      <Parent/>
      <hr/> */}
      {/* <SequenceRow /> */}
    </div>
  );
}

export default App;
