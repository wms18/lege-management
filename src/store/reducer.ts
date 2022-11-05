/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-04 00:02:00
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-04 00:42:13
 */
const defaultState = {
  num: 20,
};
const reducer = (
  state = defaultState,
  action: { type: string; value: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add":
      newState.num++;
      break;
    case "add1":
      newState.num = newState.num + action.value;
      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
