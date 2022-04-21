import React, { Component } from "react";
import "./App3.css";
export default class App3 extends Component {
  btnClick = (num) => {
    console.log(num);
  };
  render() {
    return (
      <div className="box">
        <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
      </div>
    );
  }
}
