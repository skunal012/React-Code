import React from "react";
import ChildDemo from "./ChildDemo";

class LifeCycleDemo extends React.Component{
  constructor(){
    super()
    console.log("[Constructor]");
    this.state = {
      counter :0
    }
  }

  componentDidMount(){
    console.log("[ComponentDidMount]")
  }

  componentDidUpdate(){
    console.log("[componenetDidUpdate]");
  }

  componentWillUnmount(){
  //  console.log("[ComponentWillUnmount]");    
  }

  onIncrease = (event, id) => {
    console.log("Event Target :  ", event.target);
    console.log("ID : ", id);
    this.setState({
      counter : this.state.counter + 1
    })
  }

  onDecrease(){
    console.log("Decrease");
    this.setState({
      counter : this.state.counter - 1
    })
  }

  onToggleChild = () => {
    this.setState({
      showChild : !this.state.showChild
    })
  }

  render(){
    console.log("[render]");
    let child = null;
      if(this.state.showChild){
        child = <ChildDemo />
      }
    return(      
      <div>
        <p>Life Cycle is in Progress..</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={(event) => this.onIncrease(event, 99)}>Increase</button>
        <button onClick={this.onDecrease.bind(this)}>Decrease</button>  
        <button onClick={this.onToggleChild}>Toggle Child</button>

        {child}      
      </div>
    )
  }
}

export default LifeCycleDemo;