import React from "react";
import {
  TimelineContainer,
  VerticalLine,
  Dot,
  LineContainer,
  Card,
} from "./Timeline.styles";
import timelineData from "../../../data/timelineData.json";
import TimelineCard from "../../Cards/TimelineCard/TimelineCard";
import AnimatedWrapper from "../../Layout/AnimatedWrapper/AnimatedWrapper";

function Timeline() {
  return (
    <TimelineContainer>
      {timelineData.map((tech, i) => (
        <React.Fragment key={tech.id}>
          <LineContainer>
            <AnimatedWrapper
              y={40}
              x={0}
              delay={i * 0.1}
              style={{ width: "100%" }}
            >
              <Dot />
            </AnimatedWrapper>
            <AnimatedWrapper
              y={40}
              x={0}
              delay={i * 0.1}
            >
              <VerticalLine />
            </AnimatedWrapper>
          </LineContainer>
          <AnimatedWrapper
            y={0}
            x={40}
            delay={i * 0.1}
            style={{ width: "100%" }}
          >
            <TimelineCard {...tech} />
          </AnimatedWrapper>
        </React.Fragment>
      ))}
    </TimelineContainer>
  );
}

export default Timeline;
