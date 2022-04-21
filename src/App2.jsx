import React, { Component } from "react";

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.addNum = this.addNum.bind(this);
  }
  render() {
    return (
      <div>
        <h2>数字为：{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +
        </button>
        <button onClick={this.addNum.bind(this)}>按钮2-累加1</button>
        <button
          onClick={() => {
            this.addNum();
          }}
        >
          按钮2-累加1
        </button>
        <button onClick={this.addNum}>按钮3-累加1</button>
      </div>
    );
  }
  addNum() {
    this.setState({ num: this.state.num + 1 });
    // console.log(123);
  }
}
