

/**
 * 文章发表
 * 文章管理
 * 个人信息修改
 * @returns 
 */
import {  useEffect } from 'react';

import { useNavigate,Outlet,useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  UserOutlined,
  FolderOpenOutlined,
  SolutionOutlined,
  FormOutlined,
  HeatMapOutlined,
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
  getItem('个人中心', 'userinfo', <UserOutlined />),
  getItem('文章管理', 'papermanagement', <FolderOpenOutlined />),
  getItem('发表文章', 'paperpublish', <SolutionOutlined />),
  getItem('修改信息', 'updateuser', <FormOutlined />),
];


function Personal(props) {
  const url = useLocation()
  console.log(url);
  const path = url.pathname.split('/')[2]
  console.log(path);
  //模态款
 
  console.log('personal');

  //侧边栏

  const nav = useNavigate()

  useEffect(()=>{
    if(url.pathname==='/personal'){

      nav('userinfo')
    }
  },[])
  
  const handleClick = (event) => {
    console.log('Menu item clicked:', event.key);
    // 跳转到对应的路由
    switch (event.key) {
      case 'userinfo': nav('userinfo'); break;
      case 'papermanagement': nav('papermanagement'); break;
      case 'paperpublish': nav('paperpublish'); break;
      case 'updateuser': nav('updateuser'); break;
    }

  };
  return (
    <>
      
      <div className='personal-leftnav'

      >

        <Menu
          onClick={handleClick}
          defaultSelectedKeys={['userinfo']}
          selectedKeys={[path]}
          // defaultOpenKeys={['sub1']}
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