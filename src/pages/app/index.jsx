import { Layout, Menu, Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../../components/About'
import { getUserInfo } from '../../api'


import './App.css'
const { Header, Content, Footer } = Layout;
const title = ['首页', '主要成绩', '个人简介', '交流社区', '课程特色']


const App = () => {
  const [userInfo, setUserInfo] = useState({})

  const handleClick = (event) => {
    console.log('Menu item clicked:', event.key);
    // 跳转到对应的路由
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
      // console.log(result);
      if (result.status === 0) {
        setUserInfo({ ...result.data })

      }
    }
    if (token) {
      handleUserInfo(token)
    }
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
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
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
        {/* 使用react路由，根据路由显示相应的组件 */}
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
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