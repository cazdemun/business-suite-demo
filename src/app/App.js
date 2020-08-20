import React from 'react';
import DynamicTable from './DynamicTable';
import { Row, Col, Layout } from 'antd';

function App() {
  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Layout.Header><h1 style={{ color: "white" }}>BUS Demo</h1></Layout.Header>
      <Layout.Content style={{ minHeight: "500px", overflowY: "auto" }}>
        <Row>
          <Col span={3} style={{ height: "100%" }} />
          <Col span={18} style={{ padding: "10px 0px 10px 0px", height: "100%" }}>
            <DynamicTable />
          </Col>
          <Col span={3} style={{ height: "100%" }} />
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
