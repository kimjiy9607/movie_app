import React from 'react';

class App extends React.Component{
  //data that will change is a state
  state = {
    count: 0
  };
  //everytime you call setState(), React will re-render everytime with a new state!
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  };

  componentDidMount(){
    console.log("Component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world")
  }
  //one method that React class has
  render() {
  return <div>
    <h1>The number is: {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  }

  //there are functions that are called after render function
  //Mounting-when class is created: contructor, render, componentDidMount
  //Updating-when you make changes: render, componentDidUpdate
  //Unmounting-when component dies
}

export default App;
