// refactor passed
import React from "react";
import { Row, Col, Layout, Typography, Menu, Button, Affix } from "antd";
import { HomeFilled, AccountBookFilled, BellFilled  } from "@ant-design/icons";
import URLS from "@/src/enums/urls";
import { useNavigate } from "react-router-dom";


const { Text, Title } = Typography;
const { Footer } = Layout;

const FooterComponent = () => {
  const helpDeskEmail = "helpdesk@mca.id";
  const helpDeskPhoneNumber = "+62 543-7777-9999";

const navigate = useNavigate()
  const navAccount = () => {
    navigate(URLS.AKUN)
  }

  return (
    <Affix offsetBottom={0}>
      <Footer
        style={{
          position: "sticky",
        }}
        className="Footer"
      >
        <Row className="gutter-24" justify="center">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Row>
              <Col
                className="gutter-12"
                style={{
                  top: 0,
                  zIndex: 1,
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "1rem",
                }}
              >
                <Button size="large" icon={<HomeFilled />} />
                <Button size="large" icon={<AccountBookFilled />} />
                <Button size="large" icon={<BellFilled />} />
                <Button onClick={navAccount} size="large" icon={<HomeFilled />} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Affix>
  );
};

export default FooterComponent;
