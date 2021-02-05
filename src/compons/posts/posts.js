import React, { useState, useEffect } from "react";
import "./posts.css"
import { Card, Row, Col, Input, Typography } from "antd";
import "antd/dist/antd.css";

const Posts = ({ getResourse }) => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { Text } = Typography;

  const newPosts = (post) => {
    const body = post.body;
    const title = post.title;
    const id = post.id;

    return (
      <Col span={8} key={id}>
        <Card
          title={`${id}. ${title}`}
          style={{ marginBottom: 16, marginLeft: 16, height: 200 }}
        >
          <Text maxLength={15}>{body}</Text>
        </Card>
      </Col>
    );
  };

  const fetchFunct = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setPosts([...posts, res]);
        setUserID("");
        setTitle("");
        setBody("");
      });
  };
  const submitHandler = (event) => {
    fetchFunct();
    event.preventDefault();
  };

  useEffect(() => {
    getResourse("posts")
      .then((array) => {
        setPosts(array);
      })
      .catch();
  }, []);

  return (
    <div style={{ marginLeft: 16 }}>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <Input
              placeholder="input userId"
              required
              style={{ marginBottom: 16, marginLeft: 16, width: "20%" }}
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="input title"
              required
              style={{ marginBottom: 16, marginLeft: 16, width: "20%" }}
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="input body"
              required
              style={{ marginBottom: 16, marginLeft: 16, width: "20%" }}
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button
            size="large"
            style={{ marginBottom: 16, marginLeft: 16 }}
            shape="round"
            type="submit"
            className="btn"
          >
            submit
          </button>
        </form>
      </div>
      <Row justify="center">{posts.map((user) => newPosts(user))}</Row>
    </div>
  );
};

export default Posts;