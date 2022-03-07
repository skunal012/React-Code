import React from "react";

const Child = (props) =>{
  console.log("PROPS :", props);
  return (
    <div>
       Props Demo - Child Component
       <p>User Name : {props.username}</p>
       <p>Age : {props.age}</p>
       <button onClick={() => props.nameChanged("Ajay")}> Change Name</button>
    </div>
    
  )
}

export default Child;