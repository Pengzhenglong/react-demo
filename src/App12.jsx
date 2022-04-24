import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
export default function App12() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/detail", {
      state: { username: "zhangsan" },
    });
  };
  return (
    <div>
      <h3>App12页面</h3>
      <ul>
        <li>
          <Link to="/home?id=456"> 首页</Link>
        </li>
        <li>
          <Link to="/list/123"> 列表</Link>
        </li>
        <li>
          <Link to="/detail">详情</Link>
        </li>
      </ul>
      <button onClick={goDetail}>跳转到详情页</button>
      <hr />
      <Outlet />
    </div>
  );
}
