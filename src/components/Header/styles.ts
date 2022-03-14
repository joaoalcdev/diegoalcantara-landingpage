import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }

  /* 4K - 2560px */
  @media only screen and (max-width: 2560px) {
    padding-top: 8rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
  /* Laptop L - 1440px */
  @media only screen and (max-width: 1440px) {
    padding-top: 4rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
  /* Tablet - 768px */
  @media only screen and (max-width: 768px) {
    padding-top: 3rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
    /* Mobile L - 425px */
  @media only screen and (max-width: 425px) {
    padding-top: 2rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
  /* Mobile M - 375px */
  @media only screen and (max-width: 375px) {
    padding-top: 2rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
  /* Mobile S - 320px */
  @media only screen and (max-width: 320px) {
    padding-top: 2rem;
    margin-bottom: 0rem;
    padding-left: 0.5rem
    padding-right: 0.5rem
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;

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
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 910px) {
    display: block;
  }

  display: none;

  svg {
    fill: #1890ff;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 910px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  color: #000000;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 800;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #000000;

  &:hover,
  &:active,
  &:focus {
    color: #041B55;
    text-underline-position: under;
    text-decoration: #041B55 wavy underline;
  }

  a {
    color: #1890ff;
    &:hover,
    &:active,
    &:focus {
      color: #1890ff;
      text-underline-position: under;
      text-decoration: #1890ff wavy underline;
    }
  }
`;