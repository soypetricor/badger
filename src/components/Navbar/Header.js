import React from 'react'
import { Layout, Menu } from 'antd';
import { Link} from 'react-router-dom'

const { Header} = Layout;
export default function HeadersComponent(props)  {
    const routes = [
        {
            key: 1,
            label: <Link to='/home'>Tu colección</Link>,
        },
    ]
    return (
            <Header
            style={{ 
                backgroundColor: '#1C1C1E'
            }}
            >
                <div className="logo" />
                <Menu
                    style={{ 
                    backgroundColor: '#1C1C1E',
                    color: '#FFFFFF',
                    }}
                    mode="horizontal" 
                    items={routes}
                />
            </Header>
    );
};
