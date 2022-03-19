import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "none"};
  color: ${(p) => (p.color = "#1464F6")};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding: 20px 32px;
  cursor: pointer;
  /* margin-top: 0.625rem; */
  max-width: 300px;
  transition: all 0.3s ease-in-out;
  border: 4px solid #1464F6;
  border-radius: 0px;
  /* box-shadow: 0 16px 30px rgb(23 31 114 / 20%); */

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 4px solid #18216d;
    background-color: #18216d;
  }
`;
