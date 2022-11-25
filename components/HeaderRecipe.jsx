import React from 'react'
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

const App = () => (
  <div className="header">
    <div><a href={`http://api.cookingdude.fr/admin/auth/login`}><h3  href="/" className="iconlogin">{<UserOutlined /> }</h3></a></div>
       
        <h3>Cooking Dude</h3>

</div>
);
export default App;