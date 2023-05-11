import { Layout, Menu, theme } from 'antd';
import { Routes,Route } from "react-router-dom";
import About from '../../components/About'
import './App.css'
const { Header, Content, Footer } = Layout;
const title = ['首页', '主要成绩', '个人简介', '交流社区', '课程特色']
const App = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const handleClick = (event) => {
    console.log('Menu item clicked:', event.key);
    // 跳转到对应的路由
  };
  return (
    <Layout className="layout">
      <Header style={{ textAlign: 'center' }}>
        <div className="logo" />
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