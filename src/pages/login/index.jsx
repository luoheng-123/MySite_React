import { Form, Checkbox, Button, Input } from "antd";
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import React from "react";
import { reqLogin } from "../../api";
import { useNavigate } from "react-router-dom";


import logo from '../../assets/logo.png'
import './login.less'


function Login() {
    const nav = useNavigate()
    const onFinish =  async(values) => {
        console.log('Success:', values);
        const { username, password } = values
        const result = await reqLogin(username, password)
        console.log(result);
        if(result.status===0){
            localStorage.setItem('token',result.token);
            nav('/')
        }else{
            
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo" />
                <h1>学员登录</h1>
            </header>
            <section className="login-content">
                {/* <div className={user.errorMsg ? 'error-msg show' : 'error-msg'}>{user.errorMsg}</div> */}
                <h2>用户登录</h2>
                <Form className="login-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的用户名!',
                            },
                            {
                                min: 4, message: '用户名必须大于4位'
                            },
                            {
                                max: 12, message: '用户名必须小于12位'
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母、数字或下划线组成'
                            }
                        ]}
                    >
                        <Input
                    prefix={<UserOutlined  style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                    </Form.Item>
                    
                    <Form.Item
                        label="密&nbsp;&nbsp;&nbsp;码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码!',
                            }, {
                                min: 4, message: '密码必须大于4位'
                            },
                            {
                                max: 12, message: '密码名必须小于12位'
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是字母、数字或下划线组成'
                            }
                        ]}
                    >
                        <Input.Password  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="密码"
                  />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 1,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住账号</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}

                    >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
}

export default Login;