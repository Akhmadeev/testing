import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

const Proba = ({ getResourse }) => {
  const [users, setUsers] = useState([]);

  const newUser = (post) => {
    const name = post.title;
    const id = post.id;
    const img = post.thumbnailUrl;

    return (
      <Col span={8} key={id}>
        <Card title={id}>
          <img src={img} />
          <h1>{name}</h1>
        </Card>
      </Col>
    );
  };

  useEffect(() => {
    getResourse("albums")
      .then((array) => {
        setUsers(array);
        console.log(array)
      })
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

export default Albums;
