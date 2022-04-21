import React from "react";

const msg = "react 学习2";
let flags = true;
const mystyle = { background: "blue" };
let arr = ["react", "vue", "angular"];
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>你好 react2</h2>
        <h2>{msg}</h2>

        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" />
        <div className="box ">class</div>
        <div style={{ background: flags ? "pink" : "blue" }}>111</div>
        <div style={mystyle}>222</div>
        <ul>
          {arr.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
