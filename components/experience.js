import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";

export default function Experience() {
  const bgLight = "#DFD5C9";  // Light mode background
  const bgDark = "rgba(255, 255, 255, 0.05)";  // Dark mode background
  const borderLight = "1px solid rgba(0, 0, 0, 0.15)";  // Light mode border
  const borderDark = "1px solid rgba(255, 255, 255, 0.1)";  // Dark mode border
  const arrowLight = "0.4rem solid #4A5568";  // Light mode arrow
  const arrowDark = "0.4rem solid rgba(255, 255, 255, 0.5)";  // Dark mode arrow

  const background = useColorModeValue(bgLight, bgDark);
  const border = useColorModeValue(borderLight, borderDark);
  const arrow = useColorModeValue(arrowLight, arrowDark);

  return (
    <Box>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: background,
                boxShadow: "none",
                border: border,
                textAlign: "left",
                borderRadius: "lg",
                width: "calc(50% + 8rem)",
                marginRight: "calc(-5%)",
              }}
              contentArrowStyle={{
                borderRight: arrow,
              }}
              date={item.date}
              visible={true}
              iconStyle={{
                display: "none"
              }}
         
            >
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              <Text>{item.description}</Text>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </Box>
  );
}
