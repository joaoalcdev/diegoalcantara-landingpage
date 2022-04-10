import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Extra = styled("section")`
  border-top: 3px solid #041B33;
  background: #041B44;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const DisableItems = styled("div")`
  display: flex;
  flex-direction: row;
  visibility: hidden;
  padding: 0;
  margin: 0;
  background: #041B44;
  border: none;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  /* visibility: visible; */
  visibility: hidden;

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    img {
      height: auto;
      width: 278px;
    }
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    img {
      height: auto;
      width: 268px;
    }
  }
  /* Laptop - 1024px */
  @media only screen and (max-width: 1024px) {
    img {
      height: auto;
      width: 258px;
    }
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    img {
      height: auto;
      width: 238px;
    }
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    img {
      height: auto;
      width: 198px;
    }
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    img {
      height: auto;
      width: 178px;
    }
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    img {
      height: auto;
      width: 168px;
    }
`;
