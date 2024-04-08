import React from "react";
// import 'antd/dist/antd.css';
import { Layout } from "antd";
import './App.less';
import MainHeader from './portal/MainHeader'
import RouterSwitch from './router/RouterSwitch';

const { Footer, Content } = Layout;
const App = () => (
	<Layout className="layout">
		<MainHeader />
		<Content
			style={{
				padding: '0px',
			}}
		>
			<div className="site-layout-content"><RouterSwitch /></div>
		</Content>
		<Footer
			style={{
				textAlign: 'center',
			}}
		>
			WALLDONG ©2022 Created by walldong
		</Footer>
	</Layout>
);
export default App;
