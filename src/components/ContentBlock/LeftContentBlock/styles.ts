import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin-top: 1.5rem;
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
    text-align: start;
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
      text-align: start;
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
      text-align: start;
      font-size: 2.725rem;
      width: 100%;
      max-width: 1440px;
      line-height: 1.20;
    }
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    h6 {
      text-align: start;
      font-size: 2.150rem;
      width: 100%;
      max-width: 1024px;
      line-height: 1.24;
    }
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    h6 {
      text-align: start;
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

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("p")`
  font-size: 15px;
  font-weight: 600;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: start;
  max-width: 100%;
  color: #fff;

  a {
    background: #1464F6;
    padding: auto;

    span {
      color: #fff;
    }
  }
  
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {}
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {}
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {}
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {}
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    justify-content: center;
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    justify-content: center;
  }

  /* button:last-child {
    margin-left: 20px;
  } */
`;


export const Ellipse = styled("span")`
  /* background: #1464F6; */
  content: "";
  z-index: -10;
  position: relative;
  flex-wrap: no-wrap;
  border-radius: 100%;
  box-shadow: 0px 5px 1150px 350px #1464F6;
  opacity: 20%;
  left: 0;
`
