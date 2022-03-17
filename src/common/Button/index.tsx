import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <>
    {/* <a href="https://www.google.com" target="_blank" rel="noreferrer"> */}
      <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
        {children}
      </StyledButton>
    {/* </a> */}
  </>
);
