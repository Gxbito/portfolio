import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const StackContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
