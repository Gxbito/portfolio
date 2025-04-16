import {
  ProjectCardStyled,
  ImageCardContainer,
  TextCardContainer,
  TagCardContainer,
} from "./ProjectCard.styles";

import Tag from "@/components/UI/Tag/Tag";

function ProjectCard({ id, title, name, image, year, stack }) {
  return (
    <ProjectCardStyled to={`/documentation/${id}`} id={id}>
      <ImageCardContainer image={image}>
        <Tag>{year}</Tag>
      </ImageCardContainer>
      <TextCardContainer>
        <span>{name}</span>
        <h4>{title}</h4>
      </TextCardContainer>

      <TagCardContainer>
        {stack.map((tech, i) => (
          <Tag key={i} data={tech} />
        ))}
      </TagCardContainer>
    </ProjectCardStyled>
  );
}

export default ProjectCard;
