// refactor passed
import React from "react";
import { Row, Col, Layout, Typography } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { Footer } = Layout;

const FooterComponent = () => {
  const helpDeskEmail = "helpdesk@mca.id";
  const helpDeskPhoneNumber = "+62 543-7777-9999";

  return (
    <Footer className="Footer">
      <Row className="gutter-24" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Row className="gutter-12">
            <Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={2}>
              <PhoneOutlined
                style={{
                  fontSize: "185%",
                }}
              />
            </Col>
            <Col span={14}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text style={{ fontSize: "16px" }}>{helpDeskPhoneNumber}</Text>
                <a
                  href={`mailto:${helpDeskEmail}`}
                  style={{ fontSize: "16px" }}
                >
                  {helpDeskEmail}
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
