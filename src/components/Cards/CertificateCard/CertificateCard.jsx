import {
  CertificateCardStyled,
  ImageCardContainer,
  TextCardContainer,
} from "./CertificateCard.styles";
import Tag from "../../UI/Tag/Tag";

function CertificateCard() {
  return (
    <CertificateCardStyled>
      <ImageCardContainer>
        <Tag data="2024"></Tag>
        <TextCardContainer>
          <span>TRENDSETTER THREADS</span>
          <h3>E-Commerce Pro</h3>
        </TextCardContainer>
      </ImageCardContainer>
    </CertificateCardStyled>
  );
}

export default CertificateCard;
