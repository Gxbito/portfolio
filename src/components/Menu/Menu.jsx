import {
  MenuContainer,
  OwnerDataContainer,
  OwnerDataTextContainer,
  NavLinksContainer,
} from "./Menu.styles";
import {
  FiHome,
  FiFolder,
  FiLayers,
  FiUser,
  FiMail,
  FiBriefcase,
  FiPenTool,
} from "react-icons/fi";
import BadgeIcon from "@/assets/icons/web/Badge.svg";
import { Link } from "react-router-dom";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";
import IconButton from "@/components/UI/Buttons/IconButton/IconButton";
import MenuIcon from "../../assets/icons/web/menu-icon.svg";
import HiddenWrapper from "@/components/Layout/HiddenWrapper/HiddenWrapper";

const navItems = [
  { to: "/", icon: <FiHome />, label: "Home" },
  { to: "/about", icon: <FiUser />, label: "About" },
  { to: "/works", icon: <FiBriefcase />, label: "Work" },
  { to: "/projects", icon: <FiFolder />, label: "Personal Projects" },
  { to: "/contact", icon: <FiMail />, label: "Contact" },
  { to: "/services", icon: <FiPenTool />, label: "Services" },
  { to: "/stack", icon: <FiLayers />, label: "Stack" },
];

function Menu() {
  return (
    <MenuContainer>
      <OwnerDataContainer>
        <AnimatedWrapper y={0} x={20}>
          <img src={BadgeIcon} alt="Badge Icon" />
        </AnimatedWrapper>

        <OwnerDataTextContainer>
          <AnimatedWrapper y={0} x={40}>
            <h6>Gabriel Martinez</h6>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <span>Frontend Developer</span>
          </AnimatedWrapper>
        </OwnerDataTextContainer>
      </OwnerDataContainer>

      <NavLinksContainer>
        {navItems.map((item, i) => (
          <AnimatedWrapper
            key={item.to}
            delay={i * 0.1}
            x={40}
            y={0}
            style={{ width: "100%" }}
          >
            <li>
              <Link to={item.to}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          </AnimatedWrapper>
        ))}
      </NavLinksContainer>

      <HiddenWrapper hideOn="desktop">
        <IconButton>
          <img src={MenuIcon} alt="" />
        </IconButton>
      </HiddenWrapper>
    </MenuContainer>
  );
}

export default Menu;
