/* eslint-disable jsx-a11y/alt-text */
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Slide } from "react-awesome-reveal";
// import { Button } from "../../common/Button";
import { TestimonialsBlockSection, Content, ContentWrapper, SliderContainer, SliderFeedback } from "./styles";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialsBlockProps {
  title: string;
  content: string;
  button: string;

  clientName01: string;
  clientCourse01: string;
  clientFeedback01: string;

  clientName02: string;
  clientCourse02: string;
  clientFeedback02: string;

  clientName03: string;
  clientCourse03: string;
  clientFeedback03: string;

  clientName04: string;
  clientCourse04: string;
  clientFeedback04: string;

  clientName05: string;
  clientCourse05: string;
  clientFeedback05: string;
  t: any;
}

const TestimonialSection = ({ title, content, button, t, clientName01, clientName02, clientName03, clientName04, clientName05, clientCourse01, clientCourse02, clientCourse03, clientCourse04, clientCourse05, clientFeedback01, clientFeedback02, clientFeedback03, clientFeedback04, clientFeedback05 }: TestimonialsBlockProps) => {
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <TestimonialsBlockSection>
      {/* <Slide direction="up"> */}
      <Row justify="center" align="middle">
        <ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <div className="container">
              <div className="container__separator"></div>
              <h6>{t(title)}<span>.</span></h6>
              <Content>{t(content)}</Content>
            </div>
            {/* {button && (
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                  <Button name="submit" onClick={() => scrollTo("home")}>
                    {t(button)}
                  </Button>
                </a>
              )} */}
          </Col>
        </ContentWrapper>
      </Row >
      {/* swiper container */}
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        rewind={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {/* slider 01 */}
        <SwiperSlide className="swiper-slide">
          <SliderContainer>
            <Row justify="center" align="middle">
              <div className="container-client">
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
                <h1 className="client">{t(clientName01)}</h1>
                <h1 className="course">{t(clientCourse01)}</h1>
              </div>
            </Row>
            <SliderFeedback><q>{t(clientFeedback01)}</q></SliderFeedback>
          </SliderContainer>
        </SwiperSlide>
        {/* slider 02 */}
        <SwiperSlide className="swiper-slide">
          <SliderContainer>
            <Row justify="center" align="middle">
              <div className="container-client">
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
                <h1 className="client">{t(clientName02)}</h1>
                <h1 className="course">{t(clientCourse02)}</h1>
              </div>
            </Row>
            <SliderFeedback><q>{t(clientFeedback02)}</q></SliderFeedback>
          </SliderContainer>
        </SwiperSlide>
        {/* slider 03 */}
        <SwiperSlide className="swiper-slide">
          <SliderContainer>
            <Row justify="center" align="middle">
              <div className="container-client">
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
                <h1 className="client">{t(clientName03)}</h1>
                <h1 className="course">{t(clientCourse03)}</h1>
              </div>
            </Row>
            <SliderFeedback><q>{t(clientFeedback03)}</q></SliderFeedback>
          </SliderContainer>
        </SwiperSlide>
        {/* slider 04 */}
        <SwiperSlide className="swiper-slide">
          <SliderContainer>
            <Row justify="center" align="middle">
              <div className="container-client">
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
                <h1 className="client">{t(clientName04)}</h1>
                <h1 className="course">{t(clientCourse04)}</h1>
              </div>
            </Row>
            <SliderFeedback><q>{t(clientFeedback04)}</q></SliderFeedback>
          </SliderContainer>
        </SwiperSlide>
        {/* slider 05 */}
        <SwiperSlide className="swiper-slide">
          <SliderContainer>
            <Row justify="center" align="middle">
              <div className="container-client">
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
                <h1 className="client">{t(clientName05)}</h1>
                <h1 className="course">{t(clientCourse05)}</h1>
              </div>
            </Row>
            <SliderFeedback><q>{t(clientFeedback05)}</q></SliderFeedback>
          </SliderContainer>
        </SwiperSlide>
      </Swiper>
    </TestimonialsBlockSection >
  );
};

export default withTranslation()(TestimonialSection);
