import React, { useState, createContext, useContext } from "react";

// 创建上下文空间
const NumContext = createContext();
// 子组件
function Child() {
  const { num, setNum } = useContext(NumContext);
  return (

        <>
          <h2>{num}</h2>
          <button onClick={() => setNum(456)}>修改num</button>
        </>

  );
}
// 父组件
function Parent() {
  return <Child></Child>;
}

export default function App8() {
  const [num, setNum] = useState(123);
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Parent></Parent>
    </NumContext.Provider>
  );
}
