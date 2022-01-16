import React from "react";
import Child from "./Child";

class Parent extends React.Component{
  state = {
    person:[{id : 1 ,name : "kunal" , age : 23},{id : 2, name : "Rohit" , age : "26"}]    
  }

  changeTheName = (id, name) => {
    const duplicatePersons = [...this.state.person];
    const position = this.state.person.findIndex(p => p.id);
    duplicatePersons[position].name = name;
    this.setState({
      person : duplicatePersons
    }) 
  }
    
  render(){
    let persons =this.state.person.map((person,index) => {
      return <Child
      key ={index} username={person.name} age={person.age} nameChanged = {(name) => {this.changeTheName(person.id,name)
      }}
      />
    })
    return(
      <>
      <div> Parent Component </div>  
      <hr/>
      {persons}
      {/* {this.state.person.map((person) => {return <Child username={person.name} age={person.age}/>
      })} */}
    {/* //   <Child username={this.state.person[0].name} age = {this.state.person[0].age}/>,
    //  <Child username={this.state.person[1].name} age={this.state.person[1].age} /> */}
    
    </>
    )
  }
}

 export default Parent;