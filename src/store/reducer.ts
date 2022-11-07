/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-04 00:02:00
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-07 14:17:37
 */
import handleNum from "./NumberStatus.ts";
const defaultState = {
  ...handleNum.state,
};
const reducer = (
  state = defaultState,
  action: { type: string; value: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add":
      handleNum.actions.add(newState);
      break;
    case "add1":
      handleNum.actions.add1(newState, action);
      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
