import { IconButtonStyled } from "./IconButton.styles";

function IconButton({ children, onClick, ariaLabel, ariaExpanded }) {
  return (
    <IconButtonStyled
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    >
      {children}
    </IconButtonStyled>
  );
}

export default IconButton;
