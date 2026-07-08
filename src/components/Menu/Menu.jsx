import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  MenuContainer,
  OwnerDataContainer,
  OwnerDataTextContainer,
  NavLinksContainer,
  NavItem,
  Overlay,
} from "./Menu.styles";
import {
  FiHome,
  FiLayers,
  FiUser,
  FiMail,
  FiBriefcase,
  FiPenTool,
} from "react-icons/fi";
import ProfileIcon from "@/assets/icons/web/Profile.svg";
import { Link } from "react-router-dom";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";
import IconButton from "@/components/UI/Buttons/IconButton/IconButton";
import MenuIcon from "@/assets/icons/web/menu-icon.svg";
import HiddenWrapper from "@/components/Layout/HiddenWrapper/HiddenWrapper";

const navItems = [
  { to: "/", icon: <FiHome />, label: "Home" },
  { to: "/about", icon: <FiUser />, label: "About" },
  { to: "/works", icon: <FiBriefcase />, label: "Work" },
  // { to: "/projects", icon: <FiFolder />, label: "Personal Projects" },
  { to: "/contact", icon: <FiMail />, label: "Contact" },
  { to: "/services", icon: <FiPenTool />, label: "Services" },
  { to: "/stack", icon: <FiLayers />, label: "Stack" },
];

function Menu() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleMenuActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <MenuContainer>
      <OwnerDataContainer to="/">
        <AnimatedWrapper y={0} x={20}>
          <img
            src={ProfileIcon}
            alt="Gabriel Martinez"
            width="56"
            height="56"
            decoding="async"
          />
        </AnimatedWrapper>

        <OwnerDataTextContainer>
          <AnimatedWrapper y={0} x={40}>
            <strong>Gabriel Martinez</strong>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <span>Frontend Developer</span>
          </AnimatedWrapper>
        </OwnerDataTextContainer>
      </OwnerDataContainer>

      <NavLinksContainer active={isActive}>
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            active={location.pathname === item.to}
            onClick={handleMenuActive}
          >
            <Link to={item.to} aria-current={location.pathname === item.to ? "page" : undefined}>
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          </NavItem>
        ))}
      </NavLinksContainer>

      <HiddenWrapper hideOn="desktop">
        <IconButton
          onClick={handleMenuActive}
          ariaLabel={isActive ? "Close navigation menu" : "Open navigation menu"}
          ariaExpanded={isActive}
        >
          <img
            src={MenuIcon}
            alt=""
            width="20"
            height="18"
            decoding="async"
            aria-hidden="true"
          />
        </IconButton>
      </HiddenWrapper>

      <Overlay active={isActive} aria-hidden="true" />
    </MenuContainer>
  );
}

export default Menu;
