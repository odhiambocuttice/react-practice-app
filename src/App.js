import './App.css';

import React, { Component } from "react";

import Counters  from './components/counters'
import NavBar from './components/navbar';

class  App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 5, value: 8 },
      { id: 7, value: 0 },
      { id: 8, value: 6 },
    ]
  };

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  };

  handleDelete(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] ={...counter}
    counters[index].value++
    this.setState({ counters });
  };

  render() {
  return (
    <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
    <main className='container'>
      <Counters
      counters={this.state.counters}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}/>
    </main>
    </React.Fragment>
  );
}
}
export default App;
