// 创建初始状态
const defaultState = {
  num: 1
}

// 并导出一个函数
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  // if (action.type === 'addNum') {
  //   newState.num++
  // }
  switch (action.type) {
    case 'addNum':
      newState.num++
      break;
    default:
      break
  }
  return newState
}