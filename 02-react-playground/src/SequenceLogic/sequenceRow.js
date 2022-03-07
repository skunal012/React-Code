import React from "react";


class sequenceRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [ { id: 1, email: 'john@gmail.com' }, { id: 2, email: 'ram@gmail.com' }, { id: 3, email: 'abc@gmail.com' } ] };
    this.sortByAscending = this.sortByAscending.bind(this);
    this.sortByDescending = this.sortByDescending.bind(this);
  };     
  sortByAscending() {
    let sortedAsceding = this.state.data.sort((a, b) => {
      return a.id - b.id;
    });

    this.setState({
      data: sortedAsceding
    });
  }

  sortByDescending() {

    let sortedDescending = this.state.data.sort((a, b) => {
      return b.id - a.id;
    });
    this.setState({
      data: sortedDescending
    });
  }

  render() {    
    const emps = this.state.data;
    const result = emps.map((emp, index) => <li key={index}>{emp.id}</li>);

return (
  <div>
    <button onClick={this.sortByAscending}>ASC</button>
    <button onClick={this.sortByDescending}>DESC</button>
    <ul>{result}</ul>
  </div>
)
  }
}

export default sequenceRow;
