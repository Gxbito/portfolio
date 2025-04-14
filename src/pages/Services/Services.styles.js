import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 32px;
  }
`;
