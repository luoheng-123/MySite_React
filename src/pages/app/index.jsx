import { Layout, Menu, Button, Modal } from 'antd';
import { useEffect, useState, } from 'react';
import { useNavigate,Outlet } from "react-router-dom";
import { getUserInfo } from '../../api'


import './App.css'
const { Header, Content, Footer } = Layout;
const title = ['首页', '主要成绩', '个人简介', '交流社区', '课程特色','办公助手/休闲娱乐']


const App = () => {
  const [userInfo, setUserInfo] = useState({})
  const nav = useNavigate(null)
  const handleClick = (event) => {
    console.log('Menu item clicked:', event.key);
    // 跳转到对应的路由
    switch(event.key){
      case '0':nav('/home'); break;
      case '1':nav('/achievement');break;
      case '2':nav('/about');break;
      case '3':nav('/community');break;
      case '4':nav('/course');break;
      case '5':nav('/tool');break;
    }
    
  };
  const token = localStorage.getItem('token');

  //清除token
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showLogoutModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    localStorage.removeItem('token')
    setUserInfo({})
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    async function handleUserInfo(token) {
      const headers = {
        'Authorization': token
      }
      const result = await getUserInfo(headers)
      if (result.status === 0) {
        setUserInfo({ ...result.data })

      }
    }
    if (token) {
      handleUserInfo(token)
    }
    nav('/course')
  }, [])
  console.log('app页面');
  return (

    <Layout className="layout">
      <Header style={{ textAlign: 'center', position: 'relative' }}>
        {!userInfo.role_id ?
          <Button type="primary" className='logo' target='/#/login' href='/#/login'>登 录</Button> :
          <div style={{ color: '#fff', position: 'absolute', right: '60px', }}>
            欢迎, {userInfo.username}
            <Button onClick={showLogoutModal} style={{ marginLeft: '20px' }}>退出</Button>
            <Modal cancelText='取消' okText='确认' title="确认退出吗？" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </Modal>
          </div>
        }

        <Menu
          onClick={handleClick}
          style={{ textAlign: 'center' }}
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['3']}
          items={new Array(6).fill(null).map((_, index) => {
            const key = index;
            return {
              key,
              label: `${title[key]}`,
            };
          })}
        >
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Outlet></Outlet>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <span>培训地址：新田县飞马路一巷17号</span> <span>联系电话：17607495289（微信与电话同号）</span>
      </Footer>
    </Layout>
  );
};
export default App;