import { TimelineCardStyled, TextContainer } from "./TimelineCard.styles";
import BulbIcon from "../../../assets/icons/web/Bulb.svg";
import UserIcon from "../../../assets/icons/web/User.svg";
import FlashIcon from "../../../assets/icons/web/Flash.svg";
import CrownIcon from "../../../assets/icons/web/Crown.svg";

const cardConfig = {
  start: {
    icon: BulbIcon,
    span: "APRENDIZAJE INICIAL",
    title: "Inicio en Desarrollo Web",
    text: "Comencé mi aprendizaje en el desarrollo web, creando proyectos personales como blogs y portafolios básicos utilizando HTML, CSS y JavaScript. A través de estas experiencias, descubrí mi pasión por el frontend y senté las bases para mi carrera como desarrollador.",
    year: "'22",
  },
  job: {
    icon: UserIcon,
    span: "TRABAJO COLABORATIVO",
    title: "Trabajo en una Empresa",
    text: "Formé parte de un equipo multidisciplinario para desarrollar una aplicación web destinada a mejorar la comunicación interna en una empresa. Mi responsabilidad fue diseñar y codificar el frontend, asegurándome de que la interfaz fuera intuitiva y responsiva.",
    year: "'22",
  },
  course: {
    icon: FlashIcon,
    span: "EDUCACIÓN COMPLEMENTARIA",
    title: "Curso Avanzado de React",
    text: "Me especialicé tomando cursos en plataformas reconocidas, lo que me permitió aprender nuevas tecnologías y profundizar en mi conocimiento de frameworks y herramientas.",
    year: "'23",
  },
  freelance: {
    icon: CrownIcon,
    span: "TRABAJOS INDEPENDIENTES",
    title: "Freelance y Proyectos Propios",
    text: "He trabajado como freelancer en proyectos independientes, colaborando con clientes para crear soluciones personalizadas y optimizadas. Esto me ayudó a desarrollar habilidades como la comunicación y la gestión de proyectos.",
    year: "'24",
  },
};

function TimelineCard({ type }) {
  const { icon, span, title, text, year } = cardConfig[type];

  return (
    <TimelineCardStyled>
      <img src={icon} alt={type} />

      <TextContainer>
        <span>{span}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </TextContainer>
      <span>{year}</span>
    </TimelineCardStyled>
  );
}

export default TimelineCard;
