import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 24px;
  }
`;
