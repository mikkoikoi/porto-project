import { Card, Col, Row, Button, Space } from "antd";
import { LeftOutlined, RightOutlined, HolderOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import URLS from "@/src/enums/urls";
import Container from "@/src/components/Container/";
import { Carousel } from "antd";
import React, { useRef } from "react";
import { transform } from "lodash";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  const carouselRef = useRef();
  const carouselNext = () => {
    carouselRef.current.next();
  };
  const carouselPrev = () => {
    carouselRef.current.prev();
  };

  const listGambar = [
    "https://s.garasi.id/q99/showcases/a5daac4e-e16f-47c4-8a8c-750e5280680b.png",
    "https://s.garasi.id/q99/showcases/55aeb335-1293-42fe-83f0-82320ebc987b.jpeg",
    "https://s.garasi.id/q99/showcases/838277ea-3088-475b-a8eb-c483c397656f.png",
    "	https://s.garasi.id/q99/showcases/92173a95-e3ac-4b43-b294-f8efb653a3ae.png",
  ];

  const listIcon = [
    "https://s.garasi.id/q99/product_category/c12b5d18-641c-4ec0-a2bb-ed5c588e212d.svg",
    "	https://s.garasi.id/q99/product_category/3aeb9fc1-be7c-4549-a1b6-7673a45c2906.svg",
    "https://s.garasi.id/q99/product_category/43569e56-5863-4929-81fa-d4698762fc8e.svg",
    "https://s.garasi.id/q99/product_category/4cfb29d5-0062-41c1-88fd-c2796929dc22.svg",
    "https://s.garasi.id/q99/product_category/e03b31c5-1995-4dc7-9b1f-8ad0ae939af4.svg",
    "https://www.clipartmax.com/png/full/248-2485394_menu-icon-png-red.png",
  ];

  return (
    <Container>
      <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
        <Row
          justify="center"
          style={{
            flex: 1,
          }}
          gutter={[10, 10]}
        >
          <Col {...{ sm: 22, md: 16, lg: 10 }}>
            <Row>
              <Col
                style={{
                  position: "relative",
                }}
                span={24}
              >
                <Carousel ref={carouselRef} autoplay infinite={true}>
                  {listGambar.map((link, index) => {
                    return (
                      <div key={index}>
                        <img width="100%" src={link}></img>
                      </div>
                    );
                  })}
                </Carousel>
                <Button
                  ghost
                  shape="circle"
                  style={{
                    position: "absolute",
                    left: 0,
                    zIndex: 99,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  icon={<LeftOutlined />}
                  onClick={carouselPrev}
                />
                <Button
                  ghost
                  shape="circle"
                  style={{
                    position: "absolute",
                    right: 0,
                    zIndex: 99,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  icon={<RightOutlined />}
                  onClick={carouselNext}
                />
              </Col>
              <Col span={24}>
                <Card bordered={false}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {listIcon.map((link, index) => {
                      return (
                        <Button
                          ghost
                          type="text"
                          shape="round"
                          size="large"
                          key={index}
                        >
                          <img width="100%" height="100%" src={link}></img>
                        </Button>
                      );
                    })}
                  </div>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="1 Aja">hehehe</Card>
              </Col>
              <Col span={24}>
                <Card title="2 Aja">hehehe</Card>
              </Col>
              <Col span={24}>
                <Card title="3 Aja">hehehe</Card>
              </Col>
              <Col span={24}>
                <Card title="4 Aja">hehehe</Card>
              </Col>
              <Col span={24}>
                <Card title="5 Aja">hehehe</Card>
              </Col>
              <Col span={24}>
                <Card title="6 Aja">hehehe</Card>
              </Col>{" "}
              <Col span={24}>
                <Card title="7 Aja">hehehe</Card>
              </Col>{" "}
              <Col span={24}>
                <Card title="8 Aja">hehehe</Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Home;
