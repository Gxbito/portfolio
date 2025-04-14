import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const HiddenWrapperStyled = styled.div`
  ${({ hideOn }) =>
    hideOn === "desktop"
      ? `
    @media (min-width: ${breakpoints.mobile}) {
      display: none;
    }
  `
      : hideOn === "mobile"
      ? `
    @media (max-width: calc(${breakpoints.mobile} - 1px)) {
      display: none;
    }
  `
      : ""}
`;
