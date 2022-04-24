import React from "react";
import { useLocation } from "react-router-dom";
export default function Deatil() {
  let location = useLocation();
  // console.log(location.state.username);
  return <h2>Deatil页面-- {location.state ? location.state.username : ""}</h2>;
}
