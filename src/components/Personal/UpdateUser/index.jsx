import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCaptcha, updateUser } from '../../../api';
import {
    Modal,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
} from 'antd';
import Logo from '../../Logo'
import PubSub from 'pubsub-js';


const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,

        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    labelCol: {
        xs: {
            span: 24,

        },
        sm: {
            span: 24,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};
function UpdateUser() {
    const token = localStorage.getItem('token')
    //拿跟新前的用户信息
    const { userInfo } = useSelector((state) => ({
        userInfo: state.userReducer
    }))
    console.log(userInfo);
    const nav = useNavigate()
    const [captchaSVG, setCapcha] = useState('')
    const [captchaVal, setCaptchaVal] = useState('')
    // 1为用户名已存在，2为验证码不正确
    const [infoState, setInfoState] = useState(0)
    const [logoUrl, setLogoUrl] = useState('')
    //模态框
    // let modalTitle = '确认修改？'
    const [val,setVal]=useState({})
    const [modalTitle,setModalTitle]=useState('确认修改？')

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
        console.log(val);
        if(val.status === 0){
            localStorage.removeItem('token')
            nav('/login')  
        }
    };
    const onFinish = async (values) => {
        console.log('Received values of form: ', logoUrl);
        showModal()
        if (values.captcha !== captchaVal) {
            setInfoState(2)
        } else {
            setInfoState(0)
            
            console.log(token);
            const headers = {
                'Authorization': token,
                'Content-Type': 'application/json',
              }
            const data = {
                role_id:userInfo.role_id,
                username: values.nickname,
                password: values.confirm,
                phone: values.phone,
                gender: values.gender,
                email: values.email,
                avatar_img: logoUrl?logoUrl:userInfo.avatar_img
            }
            // console.log('跟新用户数据');
            const res = await updateUser(headers,data)
            setVal(res)
            // console.log(val);
            if (res.status === 0) {
                // 更新成功跳转到用户信息详情页
                setModalTitle('用户信息更新成功！')
                showModal()
            } 
        };
    }

    
    const refreshCaptcha = async () => {
        const result = await getCaptcha()
        if (result.status === 0) {
            setCapcha(result.data.data)
            setCaptchaVal(result.data.text)
        }
    }
    useEffect(() => {
        //订阅上传图片的url
        const res = PubSub.subscribe('logoUrl', (msg, data) => {
            // 处理接收到的消息
            console.log('Received message:', data);
            setLogoUrl(data)
        });
        //获取验证码
        refreshCaptcha()
        // 在组件卸载时取消订阅
        return () => {
            PubSub.unsubscribe(logoUrl);
        };
    }, [])
    const [form] = Form.useForm();
    return (
        <div className="register">
            <section className="register-content">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                        margin: '40px auto',
                        textAlign: 'center'

                    }}
                    scrollToFirstError
                >
                    {/* 要把图片的地址传给form表单 */}
                    <Logo imgUrl={userInfo.avatar_img}/>
                    {infoState === 1 ? <div style={{ color: 'red' }}>该用户名已被占用，请重新输入！</div> : ''}
                    <Form.Item
                        name="nickname"
                        label="用户名："
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                                whitespace: true,
                                min: 4
                            },
                        ]}
                        initialValue={userInfo.username}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="重置密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                                min: 4
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: '输入的邮箱无效!',
                            },
                            {
                                required: true,
                                message: '请输入你的邮箱!',
                            },
                        ]}
                        initialValue={userInfo.email}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="电话号码"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的电话号码!',
                            },
                        ]}
                        initialValue={userInfo.phone}
                    >
                        <Input
                            style={{
                                width: '100%',
                            }}

                        />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}
                        initialValue={userInfo.gender}
                    >
                        <Select placeholder="选择性别" >
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="验证码" >
                        <Row gutter={8} >
                            <Col span={8}>
                                <Form.Item
                                    name="captcha"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入验证码!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <img src={`data:image/svg+xml,${encodeURIComponent(captchaSVG)}`} alt="验证码" style={{ backgroundColor: '#fff', display: 'inline-block', height: '30px' }} />
                            </Col>
                            <Col span={4}>
                                <Button onClick={refreshCaptcha}>获取验证码</Button>
                            </Col>
                            {infoState === 2 ? <div style={{ color: 'red' }}>验证码输入有误，请重新输入！</div> : ''}
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ width: "100% ", height: '40px' }}>
                            确认
                        </Button>

                    </Form.Item>
                    {val.status?<div style={{color:'red'}}>{val.message}</div>:''}
                </Form>

                <Modal
                    title={modalTitle}
                    open={open}
                    onOk={hideModal}
                    onCancel={hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                </Modal>

            </section>
        </div>
    )
}
export default UpdateUser