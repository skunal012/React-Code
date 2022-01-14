// 1. access the div root
const container = document.getElementById("root");

// 2.  Create Element 
const e = React.createElement;

//3. Component
const cmp = () => {
  // return e("div",{className : "demo"},"Hello Kunal");
return (
  <div>
    <p> this is Kunal and I am Learning React JS. </p>
  </div>
)};

// 4. Render the DOM
ReactDOM.render(e(cmp),container);

//npm install serve -g
// JSX javascript xml
