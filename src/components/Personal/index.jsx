

/**
 * 文章发表
 * 文章管理
 * 个人信息修改
 * @returns 
 */
import {  useEffect } from 'react';

import { useNavigate,Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import {
  UserOutlined,
  FolderOpenOutlined,
  SolutionOutlined,
  FormOutlined,
} from '@ant-design/icons';
import './personal.css'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('个人中心', '1', <UserOutlined />),
  getItem('文章管理', '2', <FolderOpenOutlined />),
  getItem('发表文章', '3', <SolutionOutlined />),
  getItem('修改信息', '4', <FormOutlined />),
];


function Personal(props) {

  //模态款
 
  console.log('personal');

  //侧边栏

  const nav = useNavigate()

  useEffect(()=>{
    nav('userinfo')
  },[])
  
  const handleClick = (event) => {
    console.log('Menu item clicked:', event.key);
    // 跳转到对应的路由
    switch (event.key) {
      case '1': nav('userinfo'); break;
      case '2': nav('papermanagement'); break;
      case '3': nav('paperpublish'); break;
      case '4': nav('updateuser'); break;
    }

  };
  return (
    <>
      
      <div
        style={{
          width: '10%',
          height:'100%',
          marginTop:'10px'
        }}
      >

        <Menu
          onClick={handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
          style={{ float: 'left' }}
        />
      </div>

      <Outlet></Outlet>
    </>
  )
}
export default Personal