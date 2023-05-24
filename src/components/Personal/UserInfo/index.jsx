import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


import './userinfo.css'
function UserInfo() {
    const token = localStorage.getItem('token')
    const [open, setOpen] = useState(false);
    const nav = useNavigate()
    //用户信息
    const { userInfo } = useSelector((state) => ({
        userInfo: state.userReducer
    }))
    useEffect(() => {
        console.log(userInfo.role_id);
        if (!(token&&userInfo.role_id)) {
            setOpen(true)
            console.log('nav');
            // 弹出对话框，跳转到course页面
        }
    }, [])

    const handleOk = () => {
        nav('/home');
    };
    return (
        <>
            <Modal
                open={open}
                title="请先登录！！"
                onOk={handleOk}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        确认
                    </Button>,
                ]}
            >
                <p>请先登录！！</p>
            </Modal>
            <Card
                title="个人信息"
                bordered={false}
                className='ant-card-head-title'
            >
                <div className='personal-content'>
                    <div className='personal-logo'><img src={userInfo.avatar_img} alt="" /></div>
                    <p>用户名:{userInfo.username}</p>
                    <p>性别:{userInfo.gender === 'male' ? '男' : '女'}</p>
                    <p>邮箱:{userInfo.email}</p>
                    <p>电话:{userInfo.phone}</p>
                </div>
            </Card>
        </>
    )
}
export default UserInfo