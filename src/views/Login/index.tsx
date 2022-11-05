/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-02 17:57:26
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-03 17:53:07
 */
import React, { ChangeEvent, useEffect, useState, useCallback } from "react";
import { Input, Space, Button } from "antd";
import _ from "lodash";
import style from "./index.module.scss";
import initLogin from "./init.ts";
import "./login.less";
const Login: React.FC = () => {
  useEffect(() => {
    initLogin();
    window.onresize = function () {
      initLogin();
    };
  }, []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const handleUserName = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, 500);
  const handlePassword = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, 500);
  const handleCaptcha = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setCaptcha(e.target.value);
  }, 500);
  const handleLogin = () => {
    console.log("first",userName,password,captcha);
  };
  return (
    <div className={style.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录盒子 */}
      <div className={[style.loginBox, "loginbox"].join(" ")}>
        {/* 标题部分 */}
        <div className={style.title}>
          <h1>前端乐哥&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
          <div className="form">
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Input placeholder="用户名" onChange={handleUserName} />
              <Input.Password placeholder="密码" onChange={handlePassword} />
              <div className="captchaBox">
                <Input placeholder="验证码" onChange={handleCaptcha} />
                <div className="captchaImg">
                  <img
                    height={"38"}
                    src="data:image/gif;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/…qat8e/FOsaNfaXcWGjLBeW8lvI0cMoYK6lSRmQjOD6GgD/9k="
                    alt=""
                  />
                </div>
              </div>
              <Button type="primary" block onClick={handleLogin}>
                登录
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
