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
import BadgeIcon from "../../assets/icons/web/Badge.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <MenuContainer>
      <OwnerDataContainer>
        <img src={BadgeIcon} alt="Badge Icon" />
        <OwnerDataTextContainer>
          <h6>Gabriel Martinez</h6>
          <span>Frontend Developer</span>
        </OwnerDataTextContainer>
      </OwnerDataContainer>

      <NavLinksContainer>
        <li>
          <Link to="/">
            <FiHome />
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            <FiUser />
            About
          </Link>
        </li>

        <li>
          <Link to="/works">
            <FiBriefcase />
            Work
          </Link>
        </li>

        <li>
          <Link>
            <FiFolder />
            Personal Projects
          </Link>
        </li>

        <li>
          <Link>
            <FiMail />
            Contact
          </Link>
        </li>

        <li>
          <Link>
            <FiPenTool />
            Services
          </Link>
        </li>

        <li>
          <Link>
            <FiLayers />
            Stack
          </Link>
        </li>
      </NavLinksContainer>
    </MenuContainer>
  );
}

export default Menu;
