
import React from "react";
import HomeLayout from "../components/HomeLayout";

import "./signup.css";
import { Form, Input, Button, Checkbox } from 'antd';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <HomeLayout>
      <div className="signup-form">
        < div className="signup-f1"></div>
      <div className="signup-f2">
      < div className="header-f1"> <h4> PLEASE REGISTER HERE!</h4></div>
      <div className="signup-f3">


    <Form

      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
     
      style={{
       
        marginTop:"10px",
        marginLeft: "50px",
        color: "white"}}

    >
      <Form.Item
        label="Full name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{ width: "240px",  }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        style={{ width: "240px",  }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone-number"
        name="number"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{ width: "240px",  }}
      >
        <Input />
      </Form.Item>



      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        style={{ width: "240px",  }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "90px", marginTop: "1px" ,background:"black" }} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>

    </HomeLayout>
  );
};

export default SignUp;