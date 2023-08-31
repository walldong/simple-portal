import Home from './../pages/Home.jsx'
import Content from "./../pages/Content.jsx";
import Content2 from "./../pages/Content2.jsx";

export const BUSINESS_ROUTES = {
	HOME: { path: "/", name: "首页", component: <Home/>, isDefault: true },
	Content: { path: "/content", name: "内容1", component: <Content/> },
	Content2: { path: "/content2", name: "内容2", component: <Content2/> },
}