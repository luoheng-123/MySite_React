
/**
 * 文章发表
 * 文章管理
 * 个人信息修改
 * @returns 
 */
import { useEffect } from 'react';

import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined,
    FolderOpenOutlined,
    SolutionOutlined,
} from '@ant-design/icons';
import './administrator.css'


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
    getItem('视频资源管理', 'videomanagement', <UserOutlined />),
    getItem('用户管理', 'usermanagement', <FolderOpenOutlined />),
    getItem('文章管理', 'allpapermanagement', <SolutionOutlined />),
    //   getItem('', 'updateuser', <FormOutlined />),
];


function Administrator(props) {
    const url = useLocation()
    console.log(url);
    const path = url.pathname.split('/')[2]
    console.log(path);
    //模态款

    console.log('administrator');

    //侧边栏

    const nav = useNavigate()

    useEffect(() => {
        console.log(url.pathname);
        if (url.pathname === '/administrator') {
            nav('videomanagement')
        }
    }, [])

    const handleClick = (event) => {
        console.log('Menu item clicked:', event.key);
        // 跳转到对应的路由
        switch (event.key) {
            case 'videomanagement': nav('videomanagement'); break;
            case 'usermanagement': nav('usermanagement'); break;
            case 'allpapermanagement': nav('allpapermanagement'); break;
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
export default Administrator