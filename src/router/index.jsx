import App from "../App12";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 有两种路由模式：BrowserRouter（History模式）和HashRouter（Hash模式）
// 定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
