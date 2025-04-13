import {
  ProjectCardStyled,
  ImageCardContainer,
  TextCardContainer,
  TagCardContainer,
} from "./ProjectCard.styles";

import Tag from "@/components/UI/Tag/Tag";

function ProjectCard() {
  return (
    <ProjectCardStyled to="/documentation">
      <ImageCardContainer>
        <Tag>2024</Tag>
      </ImageCardContainer>
      <TextCardContainer>
        <span>TRENDSETTER THREADS</span>
        <h4>E-Commerce Pro</h4>
      </TextCardContainer>

      <TagCardContainer>
        <Tag data="React" />
        <Tag data="Context API" />
        <Tag data="Axios" />
        <Tag data="Styled-components" />
        <Tag data="React router" />
        <Tag data="Yup" />
        <Tag data="Formik" />
        <Tag data="React icons" />
      </TagCardContainer>
    </ProjectCardStyled>
  );
}

export default ProjectCard;
