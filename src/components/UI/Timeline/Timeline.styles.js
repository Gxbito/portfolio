import styled from "styled-components";

// Contenedor principal
export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%; /* Ajustar según el contenido */
`;

// Línea vertical rellenable
export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 100%;
  background: var(--color-card-button); /* Negro a azul */
  transform: translateX(-50%);
  border-radius: 100px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ progress }) => `${progress}%`}; /* Rellenado dinámico */
    max-height: 100%;
    background: #3b82f6; /* Azul brillante */
    transition: height 0.2s ease-out;
    border-radius: 100px;
  }
`;

