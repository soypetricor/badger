import React from 'react'
import { Layout, Menu } from 'antd';
import { Link} from 'react-router-dom'
import { Menu1 } from '../../components'
import './Style.css'

const { Header} = Layout;
export default function HeadersComponent(props)  {
    const routes = [
        {
            key: 1,
            label: <Menu1/>,
        },
    ]
    return (
            <Header
            style={{ 
                backgroundColor: '#1C1C1E'
            }}
            >
            
                <Menu
                    className='menu-header'
                    mode="horizontal" 
                    items={routes}
                />
            </Header>
    );
};
