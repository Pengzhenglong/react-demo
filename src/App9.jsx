import React, { useState, useRef } from "react";
export default function App9() {
  const [value, setValue] = useState("add");
  const element = useRef(null);
  return (
    <>
      <h3>受控组件：</h3>
      <input
        type="text "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        获取value的值
      </button>
      <h3>不受控组件</h3>
      <input text={value} ref={element} />
      <button
        onClick={() => {
          console.log(element.current.value);
        }}
      >
        获取value的值
      </button>
      {/* <h1>{element.current.value}</h1> */}
    </>
  );
}
