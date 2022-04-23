import { useState, useEffect } from "react";
export default function App2() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  // 模拟mounted ,一般在这个位置写ajax
  // useEffect(() => {
  //   console.log("挂载完成");
  // });
  // 检测数据更新，检测哪个数据更新，就把变量填写到这个数组中
  // 当要检测的是页面中的所有变量，两个选择，一是把变量都填写进去，二是直接删掉数组
  // 当不想检测页面中任何数据的更新，可以直接给个空数组
  // useEffect(() => {
  //   console.log("num更新");
  // }, []);
  // 模拟beforeDestroy,一般在这个阶段做垃圾回收
  useEffect(() => {
    return () => {
      console.log("销毁阶段");
    };
  });
  return (
    <>
      <h2>数字为：{num1}</h2>
      <button onClick={() => setNum1(num1 + 1)}>累加</button>
      <hr />
      <h2>数字为：{num2}</h2>
      <button onClick={() => setNum2(num2 + 1)}>累加</button>
    </>
  );
}
