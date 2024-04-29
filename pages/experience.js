import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";

export default function Experience() {
  const theme = "dark";

  return (
    <Box id="experience" mt="28" mb={{ base: "28", sm: "40" }}>
      <Text as="h2" fontSize="3xl" fontWeight="bold" mb="4">My experience</Text>
      <VerticalTimeline lineColor="" css={{ ".vertical-timeline-element-left.vertical-timeline-element": { display: "none" } }}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element-left"
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                borderRadius: "lg",
                marginBottom: "28px",
                width: "calc(50% + 12rem)",
                marginLeft: "calc(-50% + 8rem)",
                height: "calc(100% - 8rem)",
                top: "1rem",
                transform: "translateY(0)",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              visible={true}
         
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
