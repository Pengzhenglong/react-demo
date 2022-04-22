import { useState } from "react";

function App1() {
  const [msg, setMsg] = useState("你好 react");
  return (
    <>
      <h2> {msg}</h2>
      <button onClick={() => setMsg("hellog world")}>修改msg</button>
    </>
  );
}
export default App1;
