import {
  Card,
  Col,
  Row,
  Button,
  Space,
  Tabs,
  Carousel,
  Collapse,
  Affix,
  Menu
} from "antd";
import { LeftOutlined, RightOutlined, HolderOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import URLS from "@/src/enums/urls";
import Container from "@/src/components/Container/";
import React, { useRef, useState, useEffect } from "react";
import { transform } from "lodash";
import API_URLS from "@/src/enums/api-urls";
import ApiService from "@/src/services/client";
import Text from "@/src/components/Text";

const { Panel } = Collapse;
const { Meta } = Card;
const { Grid } = Card;

const Home = () => {
  const [palingDicari, setPalingDicari] = useState([]);
  const carouselRef = useRef();
  const carouselNext = () => {
    carouselRef.current.next();
  };
  const carouselPrev = () => {
    carouselRef.current.prev();
  };

  const carouselHighlight = useRef();
  const carouselHighlightNext = () => {
    carouselHighlight.current.next();
  };
  const carouselHighlightPrev = () => {
    carouselHighlight.current.prev();
  };

  const carouselHighlight2 = useRef();
  const carouselHighlightNext2 = () => {
    carouselHighlight2.current.next();
  };
  const carouselHighlightPrev2 = () => {
    carouselHighlight2.current.prev();
  };

  const carouselJasaService = useRef();
  const carouselJasaNext = () => {
    carouselJasaService.current.next();
  };
  const carouselJasaPrev = () => {
    carouselJasaService.current.prev();
  };

  const carouselHome = useRef();
  const carouselHomeNext = () => {
    carouselHome.current.next();
  };
  const carouselHomePrev = () => {
    carouselHome.current.prev();
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

  const fetchPalingDicari = () => {
    ApiService.request({
      method: "get",
      url: API_URLS.HOME_PALING_DICARI,
    }).then((res) => {
      setPalingDicari(res.data.data);
    });
  };

  useEffect(() => {
    fetchPalingDicari();
  }, []);

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
          {/* SLIDER ATAS */}
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
                        <img width="100%" src={link} />
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

              {/* ICON FITUR */}
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

              {/* HIGHLIGHT */}
              <Row style={{ minHeight: "100vh" }}>
                <Col span={24}>
                  <Card title="Highlight Produk">
                    <Tabs defaultActiveKey="1" centered>
                      <Tabs.TabPane tab="Paling Dicari" key="1">
                        <Card key={`halo`}>
                          <Carousel
                            ref={carouselHighlight}
                            slidesToShow={3}
                            slidesToScroll={1}
                            infinite={false}
                          >
                            {palingDicari.map((item, index) => {
                              return (
                                <div key={index}>
                                  <Card
                                    grid={{
                                      gutter: 16,
                                    }}
                                    bordered={false}
                                    cover={<img src={item.image} />}
                                  />
                                  <Meta
                                    title={item.title}
                                    description={item.price}
                                  />
                                </div>
                              );
                            })}
                          </Carousel>
                          <Button
                            ghost
                            shape="circle"
                            style={{
                              position: "absolute",
                              left: 1,
                              zIndex: 99,
                              top: "38%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#a00403",
                            }}
                            icon={<LeftOutlined />}
                            onClick={carouselHighlightPrev}
                          />
                          <Button
                            ghost
                            shape="circle"
                            style={{
                              position: "absolute",
                              right: 1,
                              zIndex: 99,
                              top: "38%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#a00403",
                            }}
                            icon={<RightOutlined />}
                            onClick={carouselHighlightNext}
                          />
                        </Card>
                      </Tabs.TabPane>
                      <Tabs.TabPane tab="Paling Laku" key="2">
                        <Card>
                          <Carousel
                            ref={carouselHighlight2}
                            slidesToShow={2}
                            slidesToScroll={2}
                            infinite={false}
                          >
                            {palingDicari.map((item, index) => {
                              return (
                                <div key={index}>
                                  <Card
                                    grid={{
                                      gutter: 16,
                                    }}
                                    bordered={false}
                                    cover={<img src={item.image} />}
                                  />
                                  <Meta
                                    title={item.title}
                                    description={item.price}
                                  />
                                </div>
                              );
                            })}
                          </Carousel>
                          <Button
                            ghost
                            shape="circle"
                            style={{
                              position: "absolute",
                              left: 1,
                              zIndex: 99,
                              top: "40%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#a00403",
                            }}
                            icon={<LeftOutlined />}
                            onClick={carouselHighlightPrev2}
                          />
                          <Button
                            ghost
                            shape="circle"
                            style={{
                              position: "absolute",
                              right: 1,
                              zIndex: 99,
                              top: "40%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#a00403",
                            }}
                            icon={<RightOutlined />}
                            onClick={carouselHighlightNext2}
                          />
                        </Card>
                      </Tabs.TabPane>
                    </Tabs>
                  </Card>
                </Col>
              </Row>

              {/* HOME SERVICES */}
              <Col span={24}>
                <Card
                  title="Home Service"
                  cover={
                    <img
                      shape="round"
                      src="https://s.garasi.id/static/media/home-service-child.f50f0d4b.png"
                    />
                  }
                >
                  <Carousel
                    ref={carouselHome}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite={false}
                  >
                    {palingDicari.map((item, index) => {
                      return (
                        <Card
                          grid={{
                            gutter: 16,
                          }}
                          key={index}
                          bordered={false}
                          actions={[<img width="100%" src={item.image} />]}
                        />
                      );
                    })}
                  </Carousel>
                  <Button
                    ghost
                    shape="circle"
                    style={{
                      position: "absolute",
                      left: 25,
                      zIndex: 99,
                      top: "76%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#a00403",
                    }}
                    icon={<LeftOutlined />}
                    onClick={carouselHomePrev}
                  />
                  <Button
                    ghost
                    shape="circle"
                    style={{
                      position: "absolute",
                      right: 25,
                      zIndex: 99,
                      top: "76%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#a00403",
                    }}
                    icon={<RightOutlined />}
                    onClick={carouselHomeNext}
                  />
                </Card>
              </Col>

              {/* JASA SERVIS */}
              <Col gutter={[10, 10]} span={24}>
                <Card title="Bergabung di Jasa-Servis Garasi.id">
                  <Carousel
                    ref={carouselJasaService}
                    slidesToShow={3}
                    slidesToScroll={3}
                  >
                    {palingDicari.map((item, index) => {
                      return (
                        <Card
                          grid={{
                            gutter: 16,
                          }}
                          key={index}
                          bordered={false}
                          actions={[<img width="100%" src={item.image} />]}
                        />
                      );
                    })}
                  </Carousel>
                  <Button
                    ghost
                    shape="circle"
                    style={{
                      position: "absolute",
                      left: 25,
                      zIndex: 99,
                      top: "63%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#a00403",
                    }}
                    icon={<LeftOutlined />}
                    onClick={carouselJasaPrev}
                  />
                  <Button
                    ghost
                    shape="circle"
                    style={{
                      position: "absolute",
                      right: 25,
                      zIndex: 99,
                      top: "63%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#a00403",
                    }}
                    icon={<RightOutlined />}
                    onClick={carouselJasaNext}
                  />
                </Card>
              </Col>

              {/* BERITA OTOMOTIF */}
              <Col span={24}>
                <Card title="Berita Otomotif">hehehe</Card>
              </Col>

              {/* INFORMASI WEB */}
              <Col span={24}>
                <Card title="Garansi dan Jasa Servis Mobil Terlengkap">
                  <Collapse bordered={false} defaultActiveKey={["1"]}>
                    <Panel
                      header="Salah satu bagian penting yang seharusnya kita perhatikan ketika sudah
      memiliki mobil adalah perawatannya. Perawatan mobil ada berbagai macam
      mulai dari mesin, interior sampai dengan eksterior. Perawatan mesin juga
      ada banyak jenisnya ada servis berkala dan ada juga tune up. 

      Kami Garasi.id, memberikan banyak pilihan jasa servis mobil terlengkap yang
      bisa kamu pilih. Tidak perlu buang waktu lama untuk mencari bengkel atau
      untuk sekedar tau harga servisnya."
                      key="1"
                    >
                      <Text />
                    </Panel>
                  </Collapse>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Home;
