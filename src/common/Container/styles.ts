import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 160px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    max-width: calc(100% - 256px);
    padding: 0 100px;
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    max-width: calc(100% - 72px);
    padding: 0 100px;
    margin: auto;
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 16px);
    padding: 0 72px;
    margin: auto;
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 16px);
    padding: 0 36px;
    margin: auto;
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    max-width: 100%;
    padding: 0 36px;
    margin: auto;
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    max-width: 100%;
    padding: 0 18px;
    margin: auto;
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    max-width: 100%;
    padding: 0 18px;
    margin: auto;
  }
`;
