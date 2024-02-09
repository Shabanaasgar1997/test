import React, { Component } from "react";

export default class Menu extends Component {
  state = {
    count: 1,
    name: "Shabana",
  };

  render() {
    const Add = () => {
      //   console.log("hey");
      this.setState({ count: this.state.count + 1 });
    };
    const Remove = () => {
      this.setState({
        count:
          this.state.count > 1 ? this.state.count - 1 : (DisabledBtn = true),
      });
    };
    const Updatedata = () => {
      this.setState({
        name: "Shabana Anjum",
      });
    };
    let DisabledBtn = true;
    return (
      <>
        <h1>HEY THIS IS STATES CONCEPT</h1>
        <h5>{this.state.name}</h5>
        <button className="btn btn-warning" onClick={Updatedata}>
          Update
        </button>
        <button className="btn btn-danger" onClick={Remove} disabled={false}>
          Remove
        </button>
        {this.state.count}
        <button className="btn btn-success" onClick={Add}>
          Add
        </button>
      </>
    );
  }
}
