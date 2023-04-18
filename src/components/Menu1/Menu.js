import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('', 'sub1', <MenuOutlined style={{color: '#CEFB3E' }} />, [
    getItem('Crear', '1'),
    getItem('Editar perfil', '2'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        color: '#FFFFFF',
        backgroundColor: '#1C1C1E',
        width: 200,
      }}
      items={items}
    />
  );
};
export default App;