import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
// import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Ellipse,
} from "./styles";

const RightBlock = ({
  title,
  // content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      {/* <Fade direction="right"> */}
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={12} md={11} sm={11} xs={24}>
          <ContentWrapper>
            <h6>{t(title)}<span>.</span></h6>
            <Content>Vou te mostrar a ordem e formas de estudo para o ENEM que me<span> levaram a aprovação em Medicina na Universidade Federal.</span></Content>
            {/* <Content>{t(content)}</Content> */}
            <ButtonWrapper>
              <a href="https://pay.hotmart.com/next/J68440135M?off=cdaer77b&sck=HOTMART_PRODUCT_PAGE&bid=1648838024608" target="_blank" rel="noreferrer">
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </a>
            </ButtonWrapper>
          </ContentWrapper>
        </Col>
        <Col lg={12} md={11} sm={12} xs={0}>
          <SvgIcon src={icon} width="100%" height="auto" />
        </Col>
      </Row>
      {/* </Fade> */}
      <Ellipse />
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
