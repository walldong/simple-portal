import React from "react";
// import 'antd/dist/antd.css';
import { Layout, Carousel } from "antd";
import './App.less';
import MainHeader from './portal/MainHeader'
import RouterSwitch from './router/RouterSwitch';
const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
const { Footer, Content } = Layout;
const App = () => (
	<Layout className="layout">
		<MainHeader />
		<Carousel autoplay>
			<div>
				<h3 style={contentStyle}>1</h3>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
		<Content
			style={{
				padding: '0 50px',
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
