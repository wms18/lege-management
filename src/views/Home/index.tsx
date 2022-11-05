/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-02 00:49:08
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-04 00:43:18
 */
import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
const Home: React.FC = () => {
  const { num } = useSelector((state: any) => ({ num: state.num }));
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch({ type: "add1",value:10 });
  };
  return (
    <div>
      {num}
      <Button onClick={handleAdd}>按鈕</Button>
    </div>
  );
};

export default Home;
