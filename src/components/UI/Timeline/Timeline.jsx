import React from "react";
import { TimelineContainer, VerticalLine} from "./Timeline.styles";
import { useScrollProgress } from "../../../utils/useScrollProgress";

function Timeline() {
  const progress = useScrollProgress();
  
  return (
    <TimelineContainer>
      <VerticalLine progress={progress} />
    </TimelineContainer>
  );
}

export default Timeline;


