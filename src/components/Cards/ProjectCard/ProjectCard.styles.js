import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "@/styles/theme";

export const ProjectCardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px 8px 16px 8px;

  background-color: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  text-decoration: none;
`;

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.mobile}) {
    height: 210px;
  }
`;

export const TextCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 8px;

  span {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: var(--font-size-tags);
    color: var(--color-text-paragraph);
    text-transform: uppercase;
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
    scroll-margin-top: 100px;
  }
`;

export const TagCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
`;
