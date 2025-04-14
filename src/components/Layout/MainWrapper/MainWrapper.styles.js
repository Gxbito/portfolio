import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const MainWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 40px;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--color-bg-main);

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0px;
    gap: 0px;
  }
`;