// routers.js

import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import Product from '../pages/Product.jsx';
import Contact from '../pages/Contact.jsx';

export const BUSINESS_ROUTES = {
  HOME: { path: "/", name: "首页", component: <Home />, isDefault: true },
  PROFILE: { path: "/profile", name: "公司概况", component: <Profile /> },
  PRODUCT: { path: "/product", name: "产品介绍", component: <Product /> },
  CONTACT: { path: "/contact", name: "联系我们", component: <Contact /> },
};
