import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
 
  render() {
     const {onDelete, onIncrement, counters }=this.props;
    return (
      <div>
        {counters.map(counter => (
          <Counter  key={counter.id} counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
