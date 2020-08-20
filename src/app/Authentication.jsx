import React, { useState, useEffect } from "react";

// Authentication Page States:
// login
// recover
// loading
// success
// error

import { Form, Input, Button, Card, Row } from "antd";

const probability = function (n) {
  return !!n && Math.random() <= n;
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 20 }
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

const login = (setState) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      if (probability(0.5)) {
        resolve(true);
        setState("success");
      } else {
        resolve(false);
        setState("error");
      }
    }, 1500);
  });

const Authentication = () => {
  const [state, setState] = useState("login");

  useEffect(() => {
    // validate jwt
  }, []);

  useEffect(() => {
    console.log("state changed");
    if (state === "loading") {
      login(setState);
    }
  }, [state]);

  const onFinish = (values) => {
    setState("loading");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setState("error");
  };

  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {state}
      {(state === "error" || state === "login" || state === "loading") && (
        <Card style={{ width: "80%" }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Correo"
              name="username"
              rules={[
                { required: true, message: "¡Por favor ingresa tu correo!" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: "Por favor ingresa tu contraseña!" }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={state === "loading" || state === "success"}
              >
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
      <br />
      <Button type="primary" onClick={() => setState("login")}>
        Reset
      </Button>
    </Row>
  );
};

export default Authentication;
