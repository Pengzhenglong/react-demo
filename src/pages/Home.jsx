import React from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  // console.log(useSearchParams());
  const [searchParms] = useSearchParams();
  let id = searchParms.get("id");
  console.log(id);
  return <h2>Home页面 --{id}</h2>;
}
