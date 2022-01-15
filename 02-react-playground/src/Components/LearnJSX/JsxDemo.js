import React from "react";
import Auxillary from "../HighOrderComponent/Auxilary";
class JsxDemo extends React.Component{
  render(){
    // return(
    //   [<div>
    //     <p>JSX DEMO</p> 
    //   </div>,
    //   <div>
    //     <p>Second Root Element</p>
    //   </div>  
    // ]
    // )     
    
    return(
      <Auxillary>
        <div> <p>JSX DEMO</p></div>
        <div>Second Root Element</div>
      </Auxillary>
    )
  }
}

export default JsxDemo;