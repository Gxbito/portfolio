import PageWrapper from "@/components/Layout/PageWrapper/PageWrapper";
import {
  DocumentationContainer,
  DocumentationDataContainer,
  DocumentationTitltesContainer,
  GalleryContainer,
  Separator,
  TextContainer,
  TitleContainer,
} from "./Documentation.styles";

function Documentation() {
  return (
    <PageWrapper page="documentation">
      <DocumentationContainer>
        <DocumentationDataContainer>
          <TitleContainer>
            <h5>Frontend Developer – November 2024</h5>
            <h2>E-Commerce de Moda Optimizado</h2>
            <p>
              Una plataforma innovadora para transformar la experiencia de
              compra online.
            </p>
          </TitleContainer>

          <img src="" alt="" />

          <TextContainer>
            <h4>Overview</h4>
            <p>
              Este proyecto es el resultado de combinar creatividad y tecnología
              para resolver un problema real. Desde la etapa inicial, el enfoque
              estuvo en garantizar que cada elemento del diseño y funcionalidad
              reflejara las necesidades del usuario final.
              <br />
              <br />
              Más que un proyecto, esta solución representa un puente entre la
              innovación y la practicidad. Su desarrollo permitió aplicar
              metodologías ágiles para alcanzar un producto sólido y relevante
              para el mercado.
            </p>
          </TextContainer>
          <Separator />
          <TextContainer>
            <h4>Tecnologías</h4>
            <p>
              El stack tecnológico incluyó herramientas modernas como TypeScript
              para mejorar la robustez del código, junto con Tailwind CSS para
              estilos rápidos y consistentes. También se aprovechó GitHub
              Actions para implementar CI/CD, asegurando integraciones rápidas y
              efectivas.
              <br />
              <br />
              Tecnologías como Firebase para la base de datos en tiempo real y
              Webpack para la optimización del bundle fueron clave en este
              proyecto, garantizando velocidad y escalabilidad. Cada elección
              tecnológica se realizó en base a las necesidades específicas de
              los usuarios y del entorno de desarrollo.
            </p>
          </TextContainer>
          <GalleryContainer>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </GalleryContainer>
          <TextContainer>
            <h4>Desafíos</h4>
            <p>
              El mayor desafío fue lograr una sincronización perfecta entre
              múltiples usuarios en tiempo real. Esto requirió no solo ajustes
              técnicos, sino también pruebas exhaustivas para garantizar
              estabilidad bajo altas cargas.
              <br />
              <br />
              Encontrar el balance entre un diseño visual atractivo y un
              rendimiento óptimo fue otro reto importante. Optimizamos cada
              componente para garantizar tiempos de carga rápidos, incluso en
              conexiones lentas.
            </p>
          </TextContainer>
          <TextContainer>
            <h4>Proceso</h4>
            <p>
              Cada etapa del proceso fue documentada meticulosamente, desde los
              primeros bosquejos hasta el diseño interactivo en Figma. Esto
              permitió un flujo de trabajo transparente, donde cada iteración
              estuvo basada en el feedback de los usuarios.
              <br />
              <br />
              Se adoptó una metodología SCRUM con sprints semanales, asegurando
              que las tareas fueran priorizadas y entregadas en tiempo. Las
              reuniones de retrospectiva ayudaron a ajustar el enfoque en cada
              etapa.
            </p>
          </TextContainer>
          <Separator />
          <TextContainer>
            <h4>Lecciones aprendidas</h4>
            <p>
              Cada etapa del proceso fue documentada meticulosamente, desde los
              primeros bosquejos hasta el diseño interactivo en Figma. Esto
              permitió un flujo de trabajo transparente, donde cada iteración
              estuvo basada en el feedback de los usuarios.
              <br />
              <br />
              Se adoptó una metodología SCRUM con sprints semanales, asegurando
              que las tareas fueran priorizadas y entregadas en tiempo. Las
              reuniones de retrospectiva ayudaron a ajustar el enfoque en cada
              etapa.
            </p>
          </TextContainer>
          <Separator />
          <TextContainer>
            <h4>Evolución futura</h4>
            <p>
              Un paso lógico hacia el futuro sería la integración de
              inteligencia artificial para personalizar aún más la experiencia
              del usuario. Esto podría incluir recomendaciones basadas en
              patrones de uso.
              <br />
              <br />
              Otra área de evolución sería la expansión multilingüe del
              proyecto, permitiendo llegar a audiencias globales con interfaces
              adaptadas culturalmente.
            </p>
          </TextContainer>
          <img src="" alt="" />
          <TextContainer>
            <h4>Características clave</h4>
            <p>
              Una de las principales características es la funcionalidad de
              búsqueda avanzada, que permite a los usuarios encontrar
              información específica en segundos gracias a filtros dinámicos y
              una interfaz de autocompletado.
              <br />
              <br />
              Además, incluye un sistema de notificaciones en tiempo real para
              mantener a los usuarios actualizados sin interrumpir su flujo de
              trabajo.
            </p>
          </TextContainer>
          <TextContainer>
            <h4>Integraciones</h4>
            <p>
              Entre las integraciones más relevantes se encuentra Stripe,
              utilizada para habilitar un sistema de pagos seguro y flexible,
              ideal para manejar suscripciones y transacciones únicas.
              <br />
              <br />
              También se integró Algolia para la búsqueda en tiempo real,
              mejorando significativamente la velocidad y precisión de las
              consultas de los usuarios.
            </p>
          </TextContainer>
          <TextContainer>
            <h4>Documentación</h4>
            <p>
              Entre las integraciones más relevantes se encuentra Stripe,
              utilizada para habilitar un sistema de pagos seguro y flexible,
              ideal para manejar suscripciones y transacciones únicas.
              <br />
              <br />
              También se integró Algolia para la búsqueda en tiempo real,
              mejorando significativamente la velocidad y precisión de las
              consultas de los usuarios.
            </p>
          </TextContainer>
        </DocumentationDataContainer>
        <div>
          <DocumentationTitltesContainer>
            <li>Overview</li>
            <li>Tecnologías</li>
            <li>Desafíos</li>
            <li>Proceso</li>
            <li>Impacto</li>
            <li>Lecciones aprendidas</li>
            <li>Evolución futura</li>
            <li>Características clave</li>
            <li>Integraciones</li>
            <li>Documentación</li>
          </DocumentationTitltesContainer>
        </div>
      </DocumentationContainer>
    </PageWrapper>
  );
}

export default Documentation;
