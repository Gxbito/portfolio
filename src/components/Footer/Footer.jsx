import { FooterContainer, VerticalBar, IconsContainer } from "./Footer.styles";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <span>Update on 29 November 2024</span>
      <VerticalBar aria-hidden="true" />
      <span>Designed in Figma</span>
      <VerticalBar aria-hidden="true" />
      <span>Made with React</span>
      <VerticalBar aria-hidden="true" />
      <IconsContainer aria-hidden="true">
        <BsTwitterX />
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
      </IconsContainer>
    </FooterContainer>
  );
}

export default Footer;
