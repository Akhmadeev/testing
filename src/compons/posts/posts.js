import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const Posts = ({ getResourse }) => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  

  const newPosts = (post) => {
    const body = post.body;
    const title = post.title;
    const id = post.id;
    

    return (
      <Col span={8} key={id + Date.now()}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
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
    console.log(posts);
  };

  useEffect(() => {
    getResourse("posts")
      .then((array) => {
        console.log(array);
        setPosts(array);
      })
      .catch();
  }, []);
  

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit"> submit</button>
        </form>
      </div>
      <Row justify="center">{posts.map((user) => newPosts(user))}</Row>
    </div>
  );
};

export default Posts;
