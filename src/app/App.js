import React, { useState } from 'react';
import DynamicTable from './DynamicTable';
import { Row, Col, Layout, Menu, Button } from 'antd';
import { FileOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import useLocalStorage from './hooks/useLocalStorage';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const dummyConfigurations = [
  'configuration v0.1',
  'configuration v0.2',
  'configuration v0.3',
  'configuration v0.4',
  'configuration v0.5'
]

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [configurations, setConfigurations] = useLocalStorage('bus-saved-configurations', dummyConfigurations)

  const saveConfiguration = (configuration) => {
    setConfigurations([...configurations, configuration])
  }

  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Header><h1 style={{ color: "white" }}>BUS Demo</h1></Header>
      <Layout>
        <Sider width={250}
          collapsible
          collapsed={collapsed}
          onCollapse={(e) => setCollapsed(e)}
          style={{ background: "#fff", height: "100%"  }} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<SaveOutlined />} title="Saved Configurations">
              {configurations.map((config, index) =>
                <Menu.Item key={(index + 1).toString()}>
                  <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <FileOutlined />
                    <p style={{ flex: "1", margin: "0px", textOverflow: "ellipsis", overflow: "hidden" }}>{config}</p>
                    <Button style={{ padding: "0px" }}> <DeleteOutlined /></Button>
                  </div>
                </Menu.Item>
              )}
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ height: "100%" }}>
          <Row>
            <Col span={3} style={{ height: "100%" }} />
            <Col span={18} style={{ padding: "10px 0px 10px 0px", height: "100%" }}>
              <DynamicTable saveConfiguration={saveConfiguration} />
            </Col>
            <Col span={3} style={{ height: "100%" }} />
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
