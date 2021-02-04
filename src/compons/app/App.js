import React from "react";
import Albums from "../albums/albums"
import Users from "../Users/users";
import Posts from "../posts/posts";
import { Tabs } from "antd";
import "antd/dist/antd.css";

const App = () => {

 const getResourse = async (query) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
   const result = await res.json();
   return result;
 };
  
  const { TabPane } = Tabs;

  return (
    <div className="card-container">
      <Tabs type="card" centered="true">
        <TabPane tab="Пользователи" key="1">
          <Users getResourse={getResourse} />
        </TabPane>
        <TabPane tab="Посты" key="2">
          <Posts getResourse={getResourse} />
        </TabPane>
        <TabPane tab="Альбомы" key="3">
          <Albums getResourse={getResourse} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
