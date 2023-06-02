import { Layout, Menu, Button, Modal,message } from 'antd';
import { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import PubSub from 'pubsub-js';
import { getUserInfo,getOnePageArticles,getVideo} from '../../api'
import { topLeftMenuList, topRightMenuList } from '../../config/topMenuConfig';
import './App.css'
const { Header, Content, Footer } = Layout;

const App = () => {
  const url = useLocation()
  // console.log(url);
  const path = '/' + url.pathname.split('/')[1]
  // console.log(path);

  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => ({
    userInfo: state.userReducer
  }))
  const nav = useNavigate(null)

  const handleClick = (event) => {
    // 跳转到对应的路由
    switch (event.key) {
      case '/home': nav('/home'); break;
      case '/achievement': nav('/achievement'); break;
      case '/about': nav('/about'); break;
      case '/community': nav('/community'); break;
      case '/course': nav('/course'); break;
      case '/tool': nav('/tool'); break;
      case '/personal': nav('/personal'); break;
      case '/commercial': nav('/commercial'); break;
      case '/administrator': nav('/administrator'); break;
      default: nav('/home')
    }

  };
  const token = localStorage.getItem('token');

  //清除token
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (event) => {
    switch (event.key) {
      case '/login': nav('/login'); break;
      case '/register': nav('/register'); break;
    }
  }
  const showLogoutModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    localStorage.removeItem('token')
    nav('/home')
    setIsModalOpen(false);
  };
  // console.log('app刷新了', userInfo);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUserInfo = async (token) => {
    const headers = {
      'Authorization': token
    }
    const result = await getUserInfo(headers)
    console.log(result);
    if (result.status === 0) {
      // setUserInfo({ ...result.data })
      dispatch({ type: 'setUserInfo', val: result.data })
    }
  }
  // const handlerOnePageArticles = async (pageSize) => {
  //   const res = await getOnePageArticles(pageSize);
  //   console.log(res);
  //   if (res.status === 0) {
  //     // message.success('数据获取成功')
  //     // console.log(res);
  //     dispatch({ type: 'setOnePageUserArticles', val: { data: res.data, articleTotal: res.articleTotal } })
  //     PubSub.publish('article-data',{ data: res.data, articleTotal: res.articleTotal })
  //   } else {
  //     message.error(res.message)
  //   }
  // }
  // const handlerGetVideo = async (pageNum, pageSize) => {
  //   const info = {
  //     pageNum,
  //     pageSize,
  //   }
  //   const res = await getVideo(info);
  //   console.log(res);
  //   if (res.status === 0) {
  //     message.success('数据获取成功')
  //     console.log(res);
  //     dispatch({ type: 'setVideoData', val: { data: res.data, videoTotal: res.videoTotal } })
  //     PubSub.publish('video-data',{ data: res.data, videoTotal: res.videoTotal })
  //   } else {
  //     message.error(res.message)
  //   }
  //   // console.log(res);
  // }
  useEffect(() => {
    // handlerOnePageArticles({pageSize: 4})
    // handlerGetVideo(1, 8)
    if (token) {
      console.log(token);
      handleUserInfo(token)
    }
    // console.log('useeffect');
    if (url.pathname === '/') {
      nav('/home')
    }
  }, [])
  // 根据请求路径，高亮导航对应的模块
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          onClick={handleClick}
          style={{ width: '80%', textAlign: 'center' }}
          theme="dark"
          mode="horizontal"
          selectedKeys={[path]}
          items={topLeftMenuList.map((item) => {
            return {
              key: item.key,
              label: item.title,
            };
          })}
        >
        </Menu>

        {!token ? (
          <Menu
            onClick={onChange}
            style={{ width: '20%', justifyContent: 'end' }}
            theme="dark"
            mode="horizontal"
            items={topRightMenuList.map((item) => {
              return {
                key: item.key,
                label: item.title,
              };
            })}
          >
          </Menu>
        )
          :
          <div style={{ color: '#fff', position: 'absolute', right: '60px', }}>
            <img src={userInfo.avatar_img} style={{ width: '40px', height: '40px', float: 'left', borderRadius: '50%', margin: '12px 10px 0 0' }} />欢迎, {userInfo.username}
            <Button onClick={showLogoutModal} style={{ marginLeft: '20px' }}>退出</Button>
            <Modal cancelText='取消' okText='确认' title="确认退出吗？" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </Modal>
          </div>
        }
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Outlet ></Outlet>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <span>培训地址：新田县飞马路一巷17号</span> <span>联系电话：17607495289（微信与电话同号）</span>
      </Footer>
    </Layout >
  );
};
export default App;