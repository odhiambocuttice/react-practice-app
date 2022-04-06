import React, { Component } from "react";

class Counter extends Component {
  state = {
    imgUrl: "https://source.unsplash.com/random/300x400",
    tags: ["jenya", "nkeej", "ehuehiueh"],
  };
  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary ";
    return classes;
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1 style={this.styles}>Zero</h1> : value;
  };

  renderTags() {
    if (this.state.tags.length === 0) return <h1>No tags</h1>;

    return (
      <ol>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ol>
    );
  };

  render() {

    // console.log('props', this.props.counter.id);
    return (
    
      <div>
        {/* <img src={this.state.imgUrl} alt=""></img> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
