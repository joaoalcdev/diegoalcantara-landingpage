import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  ButtonWrapper,
  MinPara,
  Ellipse,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  btnContent,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              {/* <a href="https://starlink.com" target="home"> */}
              <ButtonWrapper>
                <a href="https://www.google.com">
                  <Button
                    key={id}
                    fixedWidth={true}
                  >
                    {t(btnContent)}
                  </Button>
                </a>
              </ButtonWrapper>
              {/* </a> */}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
      <Ellipse />
    </LeftContentSection >
  );
};

export default withTranslation()(LeftContentBlock);
