import React, { useState, memo, useCallback, useMemo } from "react";

const Child = memo((props) => {
  console.log(1234);
  return <button onClick={() => props.doSth()}>累加</button>;
});
export default function App10() {
  const [num, setNum] = useState(1);

  // const doSth = useCallback(() => {
  //   setNum((num) => num + 1);
  // }, []);
  // 函数中返回函数 ，高阶函数
  const doSth = useMemo(() => {
    return () => setNum((num) => num + 1);
  }, []);
  return (
    <>
      <h3>数字为：{num}</h3>
      {/* <button onClick={() => setNum(num + 1)}> 累加</button> */}
      <hr />
      {/* 父组件更新导致子组件也更新，使用memo性能优化 */}
      <Child doSth={doSth} />
    </>
  );
}
