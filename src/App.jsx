import  React from 'react';

const  msg  ='react  学习'
// 类组件
class  App extends React.Component {
  render() {
    return  (
      <div>
        <h2>你好 react</h2>
        <h2>{msg}</h2>
        
        <input type="text" />
      </div>
    )
  }
}
export  default  App;