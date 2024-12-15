import { TechnologyStyled, TechnologyDataContainer } from "./Technology.styles";
import HtmlIcon from "../../../assets/icons/stack/html.svg";
import CssIcon from "../../../assets/icons/stack/css.svg";
import JavascriptIcon from "../../../assets/icons/stack/js.svg";
import ReactIcon from "../../../assets/icons/stack/reactjs.svg";
import MaterialuiIcon from "../../../assets/icons/stack/materialui.svg";
import SassIcon from "../../../assets/icons/stack/sass.svg";
import TailwindcssIcon from "../../../assets/icons/stack/tailwindcss.svg";
import FigmaIcon from "../../../assets/icons/stack/figma.svg";
import PhotoshopIcon from "../../../assets/icons/stack/ps.svg";
import NpmIcon from "../../../assets/icons/stack/npm.svg";
import GithubIcon from "../../../assets/icons/stack/github.svg";
import GitIcon from "../../../assets/icons/stack/git.svg";
import WebpackIcon from "../../../assets/icons/stack/webpack.svg";
import ViteIcon from "../../../assets/icons/stack/vitejs.svg";
import WordpressIcon from "../../../assets/icons/stack/wordpress.svg";

const technologyConfig = {
  html: {
    icon: HtmlIcon,
    title: "HTML",
    desc: "Lenguaje base para la construcción de páginas web.",
  },
  css: {
    icon: CssIcon,
    title: "CSS",
    desc: "Estilos para dar diseño y estructura visual a las páginas.",
  },
  javascript: {
    icon: JavascriptIcon,
    title: "JavaScript",
    desc: "Lenguaje de programación para añadir interactividad.",
  },
  react: {
    icon: ReactIcon,
    title: "React",
    desc: "Biblioteca para construir interfaces de usuario dinámicas.",
  },
  materialui: {
    icon: MaterialuiIcon,
    title: "Material UI",
    desc: "Framework para estilos basado en Material Design.",
  },
  sass: {
    icon: SassIcon,
    title: "SASS",
    desc: "Preprocesador CSS que facilita estilos más avanzados.",
  },
  tailwindcss: {
    icon: TailwindcssIcon,
    title: "Tailwind CSS",
    desc: "Framework de utilidades para estilos rápidos y modulares.",
  },
  figma: {
    icon: FigmaIcon,
    title: "Figma",
    desc: "Herramienta para diseño y prototipado UI/UX.",
  },
  photoshop: {
    icon: PhotoshopIcon,
    title: "Photoshop",
    desc: "Software de edición de imágenes y diseño gráfico.",
  },
  npm: {
    icon: NpmIcon,
    title: "NPM",
    desc: "Gestor de paquetes para proyectos JavaScript.",
  },
  github: {
    icon: GithubIcon,
    title: "GitHub",
    desc: "Plataforma para control de versiones y colaboración.",
  },
  git: {
    icon: GitIcon,
    title: "Git",
    desc: "Sistema de control de versiones distribuido.",
  },
  webpack: {
    icon: WebpackIcon,
    title: "Webpack",
    desc: "Empaquetador de módulos para proyectos JavaScript.",
  },
  vite: {
    icon: ViteIcon,
    title: "Vite",
    desc: "Herramienta de desarrollo rápido para aplicaciones modernas.",
  },
  wordpress: {
    icon: WordpressIcon,
    title: "WordPress",
    desc: "CMS popular para creación de sitios web.",
  },
};

function Technology({ type }) {
  const { icon, title, desc } = technologyConfig[type];
  return (
    <TechnologyStyled>
      <img src={icon} alt={type} />
      <TechnologyDataContainer>
        <h5>{title}</h5>
        <h6>{desc}</h6>
      </TechnologyDataContainer>
    </TechnologyStyled>
  );
}

export default Technology;
