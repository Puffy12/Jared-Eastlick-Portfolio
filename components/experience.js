import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";

export default function Experience() {
  const theme = "dark";

  return (
    <Box>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                borderRadius: "lg",
                width: "calc(50% + 8rem)",
                marginRight: "calc(-5%)",
                transform: "translateY(0)",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              visible={true}
              iconStyle={{
                display: "none"
              }}
              position="right"
         
            >
              <Text fontSize="xl" fontWeight="semibold" textTransform="capitalize" mb="1">{item.title}</Text>
              <Text fontSize="md" fontWeight="normal" mt="0" mb="1">{item.location}</Text>
              <Text fontSize="md" fontWeight="normal" mt="1" color="white" opacity="0.75">{item.description}</Text>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </Box>
  );
}
