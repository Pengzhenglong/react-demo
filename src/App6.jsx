import React, { useState } from "react";

// 子组件
function Child(props) {
  return (
    <>
      <h2>子组件-{props.num} </h2>
      <button
        onClick={() => {
          props.setNum(789);
        }}
      >
        修改num
      </button>
    </>
  );
}
// 父组件
function Parent(props) {
  return <Child num={props.num} setNum={props.setNum}></Child>;
}

export default function App6() {
  const [num, setNum] = useState(123);
  // 提供给子组件用来修改num的函数
  // const changeNum = (arg) => setNum(arg);
  return <Parent num={num} setNum={setNum}></Parent>;
}
/*
无论是vue 小程序还是react,所谓的子传父，真实的都是父组件在干活
*/
