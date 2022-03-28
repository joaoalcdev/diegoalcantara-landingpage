import styled from "styled-components";

export const TestimonialsBlockSection = styled("section")`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }

  .container__separator {
    display: flex;
    justify-items: center;
    margin-right: auto;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: -0.5rem;
    align-items: center;
    border-bottom: 3px solid #1464F6;
    width: 20%;
    height: 1px;
  }

  /* swiper styles */
  .swiper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: auto;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: start;
  font-size: 18px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: auto;
  /* background: #505050; */

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: #1464F6;
  }
}

/* swiper button */
.swiper-button-next {
  display: flex;
  position: absolute;
  align-self: center;
  z-index: 10;
  right: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 30rem;
  /* margin-left: 10rem; */
  transform: rotate(90deg);
}
.swiper-button-prev {
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  z-index: 10;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-left: 10rem; */
  transform: rotate(-90deg);
  margin-left: 0;
}
.swiper-button-next,
.swiper-button-prev {
    background-image: url("/img/svg/arrow.svg");
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 242, 243);
    padding: 20px;
    color: transparent;
    border-radius: 8px;
    fill: transparent;
    stroke: transparent;
    transition: all 0.3s ease-in-out;
    width: 10px !important;
    height: 10px !important;

  &:hover {
    background: rgb(224, 224, 224);
    background-image: url("/img/svg/arrow.svg");
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(30deg) brightness(100%) contrast(100%);
  }
  &:active {
    background: rgb(170, 169, 169);
    background-image: url("/img/svg/arrow.svg");
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(20deg) brightness(100%) contrast(100%);
  }
}

.swiper-pagination-bullet {
  background: rgb(170, 169, 169);
  margin-top: 4rem;
  width: 0.500rem;
  height: 0.500rem;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  background: #1464F6;
  width: 1.275rem;
  border-radius: 2px;
  height: 0.500rem;
  opacity: 1;
}
`;

export const SliderContainer = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */

  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: auto;
  padding-right: 5rem;


  img {
    width: 70%;
    height: 100%;
    display: flex;
    object-fit: cover;
    /* margin-right: 1rem; */
    border-radius: 25%;
    /* margin-left: auto; */
    /* margin-right: auto; */
    opacity: 1;
    justify-content: center;
    align-items: center;
    /* margin-top: auto; */
    /* margin-bottom: auto; */
  }

  .container-client {
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Space Grotesk', sans-serif;

    h1.client {
      color: #1464F6;
      text-align: start !important;
      position: absolute;
      bottom: 0px;
      right: 0px;
      /* width: 10rem; */
      /* height: 2rem; */
      font-size: 1.75rem;
      white-space: nowrap;
    }
    h1.course {
      color: rgb(170, 169, 169);
      text-align: end !important;
      position: absolute;
      bottom: 0px;
      right: 0px;
      /* margin-top: 10rem */
      margin-bottom: auto;
      font-size: 1rem;
      /* width: 10rem; */
      /* height: 2rem; */
      white-space: nowrap;
    }
  }

  /* h1.client {
    display: flex;
    position: absolute;
    bottom: 0.5rem; left: 20%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #1464F6;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: Bold;
  }
  h1.course {
    display: flex;
    position: absolute;
    bottom: 0rem; left: 25%;
    margin-top: -1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #1464F6;
    font-size: 1rem;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: Bold;
  } */
`

export const SliderFeedback = styled("p")`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: -2rem;
    align-items: center;
    text-align: justify;
    width: 50%;
    height: 70%;
    font-size: 1.25rem;
    flex-direction: column;
    color: #1464F6;
    font-style: italic;
    font-family: 'Space Grotesk', sans-serif;
`

export const Content = styled("p")`
  margin-top: -0.5rem;
  margin-right: 0;
  margin-bottom: 2rem;
  margin-left: 0;
  font-family: 'Space Grotesk', sans-serif;

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    font-size: 1.2rem;
    width: 100%;
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    text-align: center;
    font-size: 1.125rem;
    padding-right: 1rem;
    width: 100%;
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
    width: 100%;
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    font-size: 0.725rem;
    width: 100%;
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    text-align: center;
    font-size: 0.950rem;
    width: 100%;
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    font-size: 0.8rem;
    width: 100%;
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    text-align: center;
    font-size: 0.875rem;
    width: 100%;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  font-family: 'Space Grotesk', sans-serif;

  h6 {
    span {
      color: #1464F6;
    }
  }

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    h6 {
      text-align: center;
      font-size: 3rem;
      width: 100%;
      max-width: 2560px;
    }
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    h6 {
      padding-top: 3rem;
      font-weight: 700;
      text-align: center;
      font-size: 2.725rem;
      width: 100%;
      max-width: 1440px;
      line-height: 1.20;
    }
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    h6 {
      text-align: center;
      font-size: 2.150rem;
      width: 100%;
      max-width: 1024px;
      line-height: 1.24;
    }
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    h6 {
      text-align: center;
      font-size: 1.675rem;
      width: 100%;
      max-width: 768px;
      line-height: 1.23;
    }
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    h6 {
      text-align: center;
      font-size: 2rem;
      width: 100%;
      max-width: 425px;
       line-height: 1.25;
    }
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    h6 {
      text-align: center;
      font-size: 1.875rem;
      width: 100%;
      max-width: 375px;
      line-height: 1.20;
    }
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    h6 {
      text-align: center;
      font-size: 1.8rem;
      width: 100%;
      max-width: 320px;
      line-height: 1.15;
    }
  }
`;
