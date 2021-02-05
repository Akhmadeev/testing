import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/antd.css";

const Users = ({ getResourse }) => {
  const [users, setUsers] = useState([]);

  const { Text } = Typography;

  const newUser = (post) => {
    const name = post.name;
    const id = post.id;
    const email = post.email;
    const phone = post.phone;
    const website = post.website;

    return (
      <Col span={8} key={id + name} style={{ marginBottom: 20 }}>
        <Card title={`${id}.`}>
          <h1>{name}</h1>
          <p>
            <Text type="secondary">email:</Text> {email}
          </p>
          <p>
            <Text type="secondary">phone:</Text> {phone}
          </p>
          <p>
            <Text type="secondary">web:</Text> {website}
          </p>
        </Card>
      </Col>
    );
  };

  useEffect(() => {
    getResourse("users")
      .then((array) => setUsers(array))
      .catch();
  }, [users]);

  return (
    <div>
      <Row justify="center" gutter={(20, 32)}>
        {users.map((user) => newUser(user))}
      </Row>
    </div>
  );
};

export default Users;
