import React  from 'react';


const msg = 'react 学习2';
const  mystyle = {background:'blue'}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>你好 react2</h2>
        <h2>{msg}</h2>
         
         <label htmlFor="username">用户名：</label>
        <input type="text"  id="username" />
        <div className="box ">class</div>
      <div  style= {{background:"pink"}}>111</div>
      <div style={mystyle}>222</div>
      </div>
    );
  }
}