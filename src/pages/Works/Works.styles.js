import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const WorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 48px;
  }
`;
