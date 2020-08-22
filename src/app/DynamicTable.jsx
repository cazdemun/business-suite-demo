import React, { useState } from "react";
import { Card, Table, Col, Row, Input, Divider, Button, Form } from "antd";
import { SaveOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const DynamicTable = ({ saveConfiguration = (configuration) => console.log('Not implemented!', `Not saving ${configuration}`) }) => {
  const [localColumns, setLocalColumns] = useState(columns)
  const [localDataSource, setLocalDataSource] = useState(dataSource)

  const updateColumns = (columnsJSON) => {
    try {
      const columns = JSON.parse(columnsJSON);
      setLocalColumns(columns);
    } catch (_) {
      console.log("Invalid JSON")
    }
  }

  const updateDataSource = (dataSourceJSON) => {
    try {
      const dataSource = JSON.parse(dataSourceJSON);
      setLocalDataSource(dataSource);
    } catch (_) {
      console.log("Invalid JSON")
    }
  }

  return <>
    <h1>Configuration Generator</h1>
    <Col className="h-full">
      <Col span={24} >
        <Card title={
          <Form style={{ display: "flex" }}
            onFinish={(values) => saveConfiguration(values.configuration)}>
            <Form.Item
              style={{ flex: "1" }}
              name="configuration"
              rules={[{ required: true, message: 'Please input the configuration name!' }]}>
              <Input placeholder="Configuration Name" />
            </Form.Item>
            <Form.Item>
              <Button
                icon={<SaveOutlined />}
                htmlType="submit">Save</Button>
            </Form.Item>
          </Form>}
          className="h-full">
          <Table tableLayout="fixed" columns={localColumns} dataSource={localDataSource} />
        </Card>
      </Col>
      <Divider />
      <Row span={24}>
        <Card title="Columns JSON" style={{ width: "50%", minHeight: "50%" }}>
          <TextArea
            autoSize
            defaultValue={JSON.stringify(columns, null, 2)}
            onChange={(e) => updateColumns(e.target.value)} />
        </Card>
        <Card title="Data JSON" style={{ width: "50%", minHeight: "50%" }}>
          <TextArea
            autoSize
            defaultValue={JSON.stringify(dataSource, null, 2)}
            onChange={(e) => updateDataSource(e.target.value)} />
        </Card>
      </Row>
      <Divider />
      <Col span={24}>
        <Card title="Final Schema" style={{ minHeight: "50%" }}>
          <TextArea
            autoSize
            defaultValue="final schema"
            onChange={(e) => console.log(e.target.value)} />
        </Card>
      </Col>
    </Col>
  </>
}

export default DynamicTable;
