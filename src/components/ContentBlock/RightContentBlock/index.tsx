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
  content,
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
            <Content>Todos os conteúdos, a ordem e a forma <span>que você deve estudar os conteúdos do ENEM que me levaram a aprovação em Medicina na Federal as 18 anos.</span></Content>
            {/* <Content>{t(content)}</Content> */}
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <Button
                      key={id}
                      color={item.color}
                      fixedWidth={true}
                      onClick={() => scrollTo("about")}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </ButtonWrapper>
          </ContentWrapper>
        </Col>
        <Col lg={12} md={11} sm={12} xs={0}>
          <SvgIcon src={icon} width="90%" height="auto" />
        </Col>
      </Row>
      {/* </Fade> */}
      <Ellipse />
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
