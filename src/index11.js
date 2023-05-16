// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './pages/app';
// import Login from './pages/login';
// import { HashRouter as Router,Routes,Route } from 'react-router-dom';

import { ConfigProvider } from 'antd';
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >

    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>

  </ConfigProvider>
);

