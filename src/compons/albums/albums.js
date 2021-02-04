import React, { useState, useEffect } from "react";
import { Menu, Card, Row, Col } from "antd";
import "antd/dist/antd.css";

const Albums = ({ getResourse }) => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [number, setNumber] = useState(1);

  const { SubMenu } = Menu;

  const handleAlbum = (e) => {
    setNumber(e.key);
  };

  const newAlbum = (album) => {
    const title = album.title;
    const id = album.id;

    return (
      <Menu.Item key={id} onClick={(e) => handleAlbum(e)}>
        {id}.{title}
      </Menu.Item>
    );
  };
  const newPhoto = (photo) => {
    const title = photo.title;
    const id = photo.id;
    const img = photo.thumbnailUrl;

    return (
      <Col key={img} span={10}>
        <Card style={{ marginBottom: 16, marginLeft: 16, height: 300 }}>
          <p>{id}</p>
          <img src={img} />
          <p>{title}</p>
        </Card>
      </Col>
    );
  };

  useEffect(() => {
    getResourse("albums")
      .then((array) => {
        setAlbums(array);
      })
      .catch();
  }, []);

  useEffect(() => {
    getResourse("photos")
      .then((array) => {
        const newArr = array.filter((el) => el.albumId == number);
        setPhotos(newArr);
      })
      .catch();
  }, [number]);

  return (
    <div>
      <Row>
        <Col span={6}>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" title="Albums">
              {albums.map((arr) => newAlbum(arr))}
            </SubMenu>
          </Menu>
        </Col>
        <Col span={18}>
          <Row>{photos.map((user) => newPhoto(user))}</Row>
        </Col>
      </Row>
    </div>
  );
};

export default Albums;