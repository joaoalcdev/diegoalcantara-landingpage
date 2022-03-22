/* eslint-disable jsx-a11y/alt-text */
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Slide } from "react-awesome-reveal";
// import { Button } from "../../common/Button";
import { TestimonialsBlockSection, Content, ContentWrapper } from "./styles";

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
  clientName02: string;
  clientCourse02: string;
  clientName03: string;
  clientCourse03: string;
  clientName04: string;
  clientCourse04: string;
  clientName05: string;
  clientCourse05: string;
  t: any;
}

const Testimonials = ({ title, content, button, t, clientName01, clientName02, clientName03, clientName04, clientName05, clientCourse01, clientCourse02, clientCourse03, clientCourse04, clientCourse05 }: TestimonialsBlockProps) => {
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
            </div>
            <h6>{t(title)}<span>.</span></h6>
            <Content>{t(content)}</Content>
            {/* {button && (
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                  <Button name="submit" onClick={() => scrollTo("home")}>
                    {t(button)}
                  </Button>
                </a>
              )} */}
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
              <SwiperSlide className="swiper-slide">
                <img src="/img/svg/graphs.svg" />
                <h1>{t(clientName01)}</h1>
                <p>{t(clientCourse01)}</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="/img/svg/graphs.svg" />
                <h1>{t(clientName02)}</h1>
                <p>{t(clientCourse02)}</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="/img/svg/graphs.svg" />
                <h1>{t(clientName03)}</h1>
                <p>{t(clientCourse03)}</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="/img/svg/graphs.svg" />
                <h1>{t(clientName04)}</h1>
                <p>{t(clientCourse04)}</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="/img/svg/graphs.svg" />
                <h1>{t(clientName05)}</h1>
                <p>{t(clientCourse05)}</p>
              </SwiperSlide>
            </Swiper>
          </Col>
        </ContentWrapper>
      </Row>
      {/* </Slide> */}
    </TestimonialsBlockSection >
  );
};

export default withTranslation()(Testimonials);
