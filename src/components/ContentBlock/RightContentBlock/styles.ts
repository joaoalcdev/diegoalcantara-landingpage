import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  /* position: relative;
  margin-top: 10rem;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 8rem; */
  /* background: radial-gradient(circle at right bottom, #2497F4 , #fff); */

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    margin-top: 9rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 8rem;
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    margin-top: 2rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 4rem;
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    margin-top: 5rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 6rem;
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 3rem;
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    margin-top: 3rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 3rem;

    img {
      display: none;
    }
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    margin-top: 3rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 2rem;

    img {
      display: none;
    }
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    margin-top: 3rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;

    img {
      display: none;
    }
  }
`;


// TITLE STYLES
export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;

    span {
      color: #1464F6;
    }
  }

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
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
      text-align: start;
      font-size: 2.525rem;
      width: 100%;
      max-width: 1440px;
      line-height: 1.20;
      margin-right: 4rem;
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
      margin-left: 0;
      margin-right: 0;
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
      margin-left: 0;
      margin-right: 0;
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
      margin-left: 0;
      margin-right: 0;
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
      margin-left: 0;
      margin-right: 0;
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
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

// Subtitle
export const Content = styled("p")`
  margin-top: 1.5rem;
  margin-right: 0;
  margin-bottom: 2rem;
  margin-left: 0;
  font-family: 'Space Grotesk', sans-serif;
  span {
    color: #000;
    font-weight: 500;
  }

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


export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

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

// object style
export const Ellipse = styled("span")`
  /* background: #1464F6; */
  /* Tablet - 768px */
  display: flex;
  content: "";
  z-index: -10;
  position: relative;
  flex-wrap: no-wrap;
  border-radius: 100%;
  box-shadow: 0px 5px 1150px 350px #1464F6;
  opacity: 20%;
  left: 100%;

  @media only screen and (max-width: 768px) {
    content: "";
    z-index: -10;
    position: relative;
    flex-wrap: no-wrap;
    border-radius: 100%;
    box-shadow: 0px 5px 1150px 350px #1464F6;
    opacity: 20%;
    left: 100%;
  }
  /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    display: none;
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    display: none;
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    display: none;
  }
`