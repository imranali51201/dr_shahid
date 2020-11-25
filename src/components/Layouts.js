import React, { useState } from 'react'
import './Layout.css'
import { Layout, Menu } from 'antd';
import {
    MenuOutlined,
    CloseOutlined,
    HomeOutlined,
    BookOutlined,
    PhoneOutlined,
    FileDoneOutlined,
    ExclamationCircleOutlined,
    ExperimentOutlined,
    FileImageOutlined
} from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Layouts() {

    const [siderCollapsed, setSiderCollapsed] = useState(true)
    const [siderWidth, setSiderWidth] = useState(window.document.body.clientWidth < 500)

    window.addEventListener("resize", () => setSiderWidth(window.document.body.clientWidth < 500))

    return (
        <Layout className="layout">
            <Header>
                {siderCollapsed ? (
                    <MenuOutlined className="siderButton" onClick={() => setSiderCollapsed(!siderCollapsed)} />) : (
                        <CloseOutlined className="siderButton" onClick={() => setSiderCollapsed(!siderCollapsed)} />)
                }
            </Header>
            <Layout>
                <Sider collapsedWidth={siderWidth ? 0 : undefined} collapsed={siderCollapsed}>
                    <Menu
                        // defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="home" onClick={() => setSiderCollapsed(true)}>
                                Home
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
                            <Link to="about" onClick={() => setSiderCollapsed(true)}>
                                About
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<BookOutlined />}>
                            <Link to="qualification" onClick={() => setSiderCollapsed(true)}>
                                Qualification
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FileDoneOutlined />}>
                            <Link to="certifications" onClick={() => setSiderCollapsed(true)}>
                                Certifications
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<ExperimentOutlined />}>
                            <Link to="research&experience" onClick={() => setSiderCollapsed(true)}>
                                Research And Experience
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FileImageOutlined />}>
                            <Link to="gallery" onClick={() => setSiderCollapsed(true)}>
                                Image Gallery
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<PhoneOutlined />}>
                            <Link to="contact" onClick={() => setSiderCollapsed(true)}>
                                Contact
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content><Outlet /></Content>
            </Layout>
        </Layout>
    )
}

export default Layouts
