import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Header } from "@/components/Header";
import { Layout, Menu } from 'antd';
import { UserOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header: AntHeader, Sider, Content } = Layout;

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Layout style={{ minHeight: '100vh' }}>
                <AntHeader style={{ background: '#fff', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="logo" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Your Logo
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <UserOutlined style={{ fontSize: '20px' }} />
                    </div>
                </AntHeader>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1" icon={<DashboardOutlined />}>
                                <Link href="/dashboard">Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                <Link href="/profile">Profile</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SettingOutlined />}>
                                <Link href="/settings">Settings</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <AntdRegistry>{children}</AntdRegistry>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
} 