import React from 'react';
import { Layout } from 'antd';
import MainMenu from './MainMenu';

const { Header } = Layout;

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  height: '50px', // 根据实际需求调整高度
  marginRight: '20px', // 根据实际需求调整与菜单的间距
};

const menuContainerStyle = {
  flexGrow: 1, // 让菜单容器占据剩余空间，实现居中
};

const MainHeader = () => (
  <Header style={headerStyle}>
    <div style={logoStyle}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" style={{ height: '100%', width: 'auto' }} />
    </div>
    <div style={menuContainerStyle}>
      <MainMenu />
    </div>
  </Header>
);

export default MainHeader;
