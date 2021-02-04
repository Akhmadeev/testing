import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

const Users = ({ getResourse }) => {
  const [users, setUsers] = useState([]);

  const newUser = (post) => {
    const name = post.name;
    const id = post.id;
    const email = post.email;

    return (
      <Col span={8} key={id + name} style={{ marginBottom: 20 }}>
        <Card title={id}>
          <h1>{name}</h1>
          <p>{email}</p>
        </Card>
      </Col>
    );
  };

  useEffect(() => {
    getResourse("users")
      .then((array) => setUsers(array))
      .catch();
  }, []);

  return (
    <div>
      <Row justify="center" gutter={(20, 32)}>
        {users.map((user) => newUser(user))}
      </Row>
    </div>
  );
};

export default Users;
