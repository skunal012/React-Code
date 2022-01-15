import React from "react";

class child extends React.Component{
  componentWillUnmount(){
    console.log("[child - componentWillUnmount]");
  }

  componentDidMount(){
    console.log("[Child - component did mount]");
  }
  render(){
    console.log("[CHILD : Render]");
   return(
     <div>
       Child Loaded ....
     </div>
   )
  }
}


// const child = () => {
//   console.log("[CHILD : Render]");
//   return(
//     <div>
//       Child Loaded ....
//     </div>
//   )
// }

export default child;