import { Layout } from "antd";
import MainMenu from './MainMenu'
import './MainHeader.less';


const { Header } = Layout;

const MainHeader = () => (
	<Header>
		<div className="logo" />
		<MainMenu />
	</Header>
)
export default MainHeader;