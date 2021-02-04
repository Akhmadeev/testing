import React, { useState } from "react";
import { Input, Button } from "antd";

const NewPostForm = () => {
  const [userId, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
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
    .then(res => console.log(res))
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div style={{ marginBottom: 16, marginLeft: 16, width: "30%" }}>
          <Input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 16, marginLeft: 16, width: "30%" }}>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 16, marginLeft: 16, width: "30%" }}>
          <Input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          size="large"
          style={{ marginBottom: 16, marginLeft: 16 }}
          shape="round">
          submit
        </Button>
      </form>
    </div>
  );
};

export default NewPostForm;
