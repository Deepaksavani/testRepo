import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (value) => {
    debugger;
    const data = JSON.parse(localStorage.getItem("registerData"));
    if (data) {
      let logindetails = data.filter(
        (x) => x.email.toLowerCase() == value.username.toLowerCase()
      );
      if (logindetails) {
        if (
          logindetails[0].email.toLowerCase() == value.username.toLowerCase() &&
          logindetails[0].password == value.password
        ) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("loginDetails", JSON.stringify(logindetails));
          navigate("/table");
        } else {
          alert("Invalid Login");
        }
      } else {
        alert("Invalid UserName and Password.");
      }
    }
  };

  const onFinishFailed = () => {};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <div className="row">
        <div className="col-md-6">
          <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Login;
