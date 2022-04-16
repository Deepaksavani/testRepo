import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [registerData, setRegisterData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("registerData"));
    setRegisterData(data);
  }, []);
  const onFinish = (value) => {
    var tempData = [];
    if (registerData) {
      value["id"] = registerData.length + 1;
      tempData = registerData;
    } else {
      value["id"] = 1;
      tempData = [];
    }

    tempData.push(value);
    setRegisterData(tempData);
    localStorage.setItem("registerData", JSON.stringify(tempData));
    localStorage.setItem("isLogin", true);
    window.location.href = "login";
  };

  const onFinishFailed = () => {};

  return (
    <div style={{ padding: "20px" }}>
      <div className="row">
        <h1>Register</h1>
        <div className="col-md-6">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mobile No"
              name="mobileno"
              rules={[
                { required: true, message: "Please input your Mobile No!" },
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

            <Form.Item>
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

export default Register;
