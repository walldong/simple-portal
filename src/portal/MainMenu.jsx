import React, { useState } from 'react';
import { Menu } from "antd";
import { menus } from "../common/menu";
const MainMenu = () => {
    const [current, setCurrent] = useState('/');
    const onClick = (e) => {
        console.log(e.key)
        setCurrent(e.key);
    };
    return <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['/']}
        onClick={onClick} 
        selectedKeys={[current]}
        items={menus}
    />
}
export default MainMenu;