import { lazy } from "react";
import HomeContent from "../../content/HomeContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContentProduct from "../../content/ContentProduct.json";
// import MissionContent from "../../content/MissionContent.json";
import AboutMeContent from "../../content/AboutMeContent.json";
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
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
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
