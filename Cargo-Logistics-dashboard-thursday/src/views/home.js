
import React,{useState} from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import HomeLayout from "../components/HomeLayout";
import  "../views/home.css"
import { Form, Input, Checkbox } from 'antd';
import { MailFilled, LockOutlined , UserOutlined,PhoneOutlined } from '@ant-design/icons';



const Homepage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ismyModalVisible, setIsmyModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // signign
    


  };

  const showMyModal = () => {
    setIsmyModalVisible(true);

  };
  const myModalOk = () => {
    setIsmyModalVisible(false);
  };
  const myModalCancel = () => {
    setIsmyModalVisible(false);
    


  };

  return (


    <HomeLayout>
      <div className="home-container-child " style={{height:"40vh"}}>
        <div className="home1">
      
      
        <a  href="#" onClick={showMyModal} >SignIn  &nbsp; </a> 
        <a href="#" onClick={showModal}>SignUp</a>
           
      
    
        </div>
         <Modal title="PLEASE REGISTER HERE!!!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}   style={{  backgroundColor: "black" }}>
      
      
        
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
  label=""
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
  style={{ width: "352px",  }}
>
  <Input prefix={<UserOutlined />} placeholder=" please enter your username " />
</Form.Item>
<Form.Item
  label=""
  name="email"
  rules={[{ required: true, message: 'Please input your email!' }]}
  style={{ width: "352px",  }}
>
<Input prefix={<MailFilled className="site-form-item-icon" />} placeholder=" lpease enter your email " type="email" />
  
</Form.Item>
<Form.Item
  label=""
  name="number"
  rules={[{ required: true, message: 'Please enter your phone number' }]}
  style={{ width: "352px",  }}
>
  <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="  please enter your phone number" type="string" />
</Form.Item>



<Form.Item
  label=""
  name="password"
  rules={[{ required: true, message: 'Please enter your password!' }]}
  style={{ width: "352px",  }}
>
  <Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="please enter  password" type="password" />}
type="password"
placeholder="Password"
/>
</Form.Item>

{/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item> */}

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"black" }} >
    Submit
  </Button>
</Form.Item>
</Form>

      </Modal>

        
      <Modal title=" Login here HERE!!" visible={ismyModalVisible} onOk={myModalOk} onCancel={myModalCancel}  style={{  backgroundColor: "black" }}>
      
      
      
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
  label=""
  name="email"
  rules={[{ required: true, message: 'Please input your email!' }]}
  style={{ width: "352px",  }}
>
<Input prefix={<MailFilled className="site-form-item-icon" />} placeholder="email " type="email" />
  
</Form.Item>






<Form.Item
  label=""
  name="password"
  rules={[{ required: true, message: 'Please enter your password!' }]}
  style={{ width: "352px",  }}
>
  <Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="email or phone number" type="email" />}
type="password"
placeholder="Password"
/>
</Form.Item>

<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"black" }} >
    Submit
  </Button>
</Form.Item>
</Form>

      </Modal>
      {/* signinmodal */}

      

        <div className="content" style={{background:"white", marginTop:"400px", width:"100%",height:"190vh"}}>


        </div>


      </div>
    </HomeLayout>


  )
}

export default Homepage;