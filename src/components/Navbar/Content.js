import React from 'react'
import { Layout} from 'antd';

const { Content } = Layout;
export default function ContentComponent(props)  {
    return (
            <Content
                style={{
                    padding: '50px',
                    backgroundColor: '#2F2F30',
                }}
            >
                <div>
                    {props.children}
                </div>
            </Content>
    );
};