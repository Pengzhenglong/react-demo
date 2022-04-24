import React from "react";
import { connect } from "react-redux";
function App11(props) {
  return (
    <>
      <h2>hello redux 数据为{props.num}</h2>
      <button onClick={props.add}>累加</button>
    </>
  );
}
// export default connect(state映射，dispatch映射)(当前组件的名称);
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const  mapDispatchToProps = (dispatch) => {
  return{
    // 映射函数`
    // 累加
    add: () => {
      const  action = {type:"addNum"}
      dispatch(action)
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App11);
