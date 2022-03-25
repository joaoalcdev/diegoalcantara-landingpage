import { lazy } from "react";
import HomeContent from "../../content/HomeContent.json";
import TestimonialsBlockContent from "../../content/TestimonialsBlockContent.json";
import ContentProduct from "../../content/ContentProduct.json";
// import MissionContent from "../../content/MissionContent.json";
import AboutMeContent from "../../content/AboutMeContent.json";
import Testimonials from "../../components/MiddleBlock";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* HOME SECTION */}
      <ContentBlock
        type="right"
        title={HomeContent.title}
        content={HomeContent.text}
        button={HomeContent.button}
        icon="home-bg.webp"
        id="home" btnContent={""}
      />
      {/* PRODUCT SECTION */}
      <ContentBlock
        type="left"
        title={ContentProduct.title}
        content={ContentProduct.text}
        section={ContentProduct.section}
        icon="home-bg.webp"
        id="about" btnContent={"QUERO ADQUIRIR O MATERIAL"}
      />
      {/* ABOUT ME SECTION */}
      <ContentBlock
        type="rightcustom"
        title={AboutMeContent.title}
        content={AboutMeContent.text}
        icon="about-me.svg"
        id="about" btnContent={""}
      />
      {/* CENTRED SECTION */}
      <Testimonials
        title={TestimonialsBlockContent.title}
        content={TestimonialsBlockContent.text}
        button={TestimonialsBlockContent.button}

        clientName01={TestimonialsBlockContent.clientTitle01}
        clientCourse01={TestimonialsBlockContent.clientCourse01}
        clientFeedback01={TestimonialsBlockContent.clientFeedback01}

        clientName02={TestimonialsBlockContent.clientTitle02}
        clientCourse02={TestimonialsBlockContent.clientCourse02}
        clientFeedback02={TestimonialsBlockContent.clientFeedback02}

        clientName03={TestimonialsBlockContent.clientTitle03}
        clientCourse03={TestimonialsBlockContent.clientCourse03}
        clientFeedback03={TestimonialsBlockContent.clientFeedback03}

        clientName04={TestimonialsBlockContent.clientTitle04}
        clientCourse04={TestimonialsBlockContent.clientCourse04}
        clientFeedback04={TestimonialsBlockContent.clientFeedback04}

        clientName05={TestimonialsBlockContent.clientTitle05}
        clientCourse05={TestimonialsBlockContent.clientCourse05}
        clientFeedback05={TestimonialsBlockContent.clientFeedback05}
      />
      {/* <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="about-me.svg"
        id="mission"
      /> */}
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
