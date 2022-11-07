/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-07 14:09:17
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-07 14:14:01
 */
export default {
  state: {
    num: 20,
  },
  actions: {
    add(newState: { num: number }) {
      newState.num++;
    },
    add1(newState: { num: number }, action: { type: string; value: number }) {
      newState.num = newState.num + action.value;
    },
  },
};
