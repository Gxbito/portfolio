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
  FiFolder,
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
          <img src={ProfileIcon} alt="Gabriel" />
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

      <NavLinksContainer active={isActive}>
        {navItems.map((item, i) => {
          console.log(location.pathname === item.to);
          return (
            <AnimatedWrapper
              key={item.to}
              delay={i * 0.1}
              x={40}
              y={0}
              style={{ width: "100%" }}
            >
              <NavItem
                active={location.pathname === item.to}
                onClick={handleMenuActive}
              >
                <Link to={item.to}>
                  {item.icon}
                  {item.label}
                </Link>
              </NavItem>
            </AnimatedWrapper>
          );
        })}
      </NavLinksContainer>

      <HiddenWrapper hideOn="desktop">
        <IconButton onClick={handleMenuActive}>
          <img src={MenuIcon} alt="menu-icon" />
        </IconButton>
      </HiddenWrapper>

      <Overlay active={isActive} />
    </MenuContainer>
  );
}

export default Menu;
