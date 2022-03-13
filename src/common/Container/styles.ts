import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    max-width: calc(100% - 256px);
    padding: 0 100px;
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    max-width: calc(100% - 72px);
    padding: 0 100px;
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 16px);
    padding: 0 72px;
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 16px);
    padding: 0 36px;
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    max-width: 100%;
    padding: 0 36px;
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    max-width: 100%;
    padding: 0 18px;
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    max-width: 320px;
    width: 100%;
    padding: 0 18px;
  }
`;
