/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-05 14:48:33
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-07 14:01:15
 */
type RootState = ReturnType<typeof import("@/store").getState>;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
}
