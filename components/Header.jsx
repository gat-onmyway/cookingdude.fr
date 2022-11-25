import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

const App = ({setFilter, categories}) => (
  <div className="header">
    <div><a href={`http://api.cookingdude.fr/admin/auth/login`}><h3  href="/" className="iconlogin">{<UserOutlined /> }</h3></a></div>
       
        <h3>Cooking Dude</h3>
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.SubMenu className="menu" key="SubMenu" title="" icon={<MenuOutlined />}>
      <Menu.Item key="two" onClick={() => {setFilter(null)}}>
        Toutes les Recettes
      </Menu.Item>
      {categories.data.map((category) => (
      <Menu.Item key="three" onClick={() => {setFilter(category.attributes.category)}}>
        {category.attributes.category}
      </Menu.Item>
       ))}
    </Menu.SubMenu>
  </Menu>
</div>
);
export default App;