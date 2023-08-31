import { Layout } from "antd";
import MainMenu from './MainMenu'
import './MainHeader.less';


const { Header } = Layout;
// create a function transform tree to list

const MainHeader = () => (
	<Header>
		<div className="logo" />
		<MainMenu />
	</Header>
)
export default MainHeader;