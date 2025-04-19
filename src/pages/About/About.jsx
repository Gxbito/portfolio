import {
  AboutHeroContainer,
  TimelineContainer,
  TimelineCardContainer,
} from "./About.styles";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import PreviewSection from "../../components/Layout/PreviewSection/PreviewSection";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import TimelineCard from "../../components/Cards/TimelineCard/TimelineCard";
import StackCard from "../../components/Cards/StackCard/StackCard";
import Timeline from "../../components/UI/Timeline/Timeline";
import HeroImage from "../../assets/images/Argentina-flag.jpg";
import timelineData from "../../data/timelineData.json";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";

function About() {
  return (
    <PageWrapper page="about">
      <AboutHeroContainer>
        <AnimatedWrapper>
          <img src={HeroImage} alt="argentina" />
        </AnimatedWrapper>

        <TextWrapper>
          <AnimatedWrapper y={0} x={40}>
            <h2>Meeting the creator</h2>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <p>
              I'm Gabriel Martínez, a frontend developer with over 2 years of
              experience building intuitive, attractive, and optimized
              interfaces. My passion for design and technology has led me to
              master modern tools like React, Material UI, and Figma.
              <br />
              <br />I specialize in turning ideas into clear, accessible digital
              products, always with a strong focus on user experience. My goal
              is to create applications that are not only efficient but also
              leave a positive impact on those who use them.
            </p>
          </AnimatedWrapper>
        </TextWrapper>
      </AboutHeroContainer>
      <TimelineContainer>
        <TextWrapper>
          <AnimatedWrapper y={0} x={40}>
            <h3>My Professional Journey</h3>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <p>
              Every step in my career has been an opportunity to learn and grow.
              From early projects that taught me the fundamentals of web
              development to more challenging collaborations where I refined my
              skills — each experience has shaped my professional approach.
            </p>
          </AnimatedWrapper>
        </TextWrapper>

        <Timeline />
        <TimelineCardContainer>
          {timelineData.map((tech, i) => (
            <AnimatedWrapper
              y={0}
              x={40}
              delay={i * 0.1}
              style={{ width: "100%" }}
            >
              <TimelineCard key={tech.id} {...tech} />
            </AnimatedWrapper>
          ))}
        </TimelineCardContainer>
      </TimelineContainer>
      <PreviewSection sectionType="works" />
      <PreviewSection sectionType="projects" />
      <PreviewSection sectionType="certificates" />
      <StackCard />
    </PageWrapper>
  );
}

export default About;
