import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

// import i18n from "i18next";
import {
  // FooterSection,
  // Title,
  // NavLink,
  Extra,
  LogoContainer,
  // Para,
  // Large,
  // Chat,
  // Empty,
  FooterContainer,
  // Language,
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            {/* <NavLink to="/"> */}
              <LogoContainer>
                <SvgIcon
                  src="logo-footer.svg"
                  aria-label="footer"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            {/* </NavLink> */}
            <FooterContainer>
              <SocialLink
                href="https://instagram.com/diegoalcantara.s"
                src="instagram.svg"
              />
              <SocialLink
                href="https://instagram.com/diegoalcantara.s"
                src="instagram.svg"
              />
              <SocialLink
                href="https://instagram.com/diegoalcantara.s"
                src="instagram.svg"
              />
              <SocialLink
                href="https://instagram.com/diegoalcantara.s"
                src="instagram.svg"
              />
              {/* <SocialLink
                href="https://medium.com/@diegoalcantara/"
                src="medium.svg"
              /> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
