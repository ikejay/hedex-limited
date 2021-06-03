import React from "react";
import "@emotion/react"
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { letterContainerVariants, letterVariants } from "./animatedvariants";



export const AnimatedTitle = (props) => {
  const { children, currentInView, type } = props;

  const StyledTitleElement = styled(motion[type])`

  text-transform: none;

  position: relative;
  max-width: 100%;

  word-break: break-word;
  z-index: 10;

  color: white;
`;

  return (
    <AnimatePresence>
      {currentInView && (
        <StyledTitleElement
          {...props}
          variants={letterContainerVariants}
          initial={"before"}
          animate={"after"}
          exit={"before"}
          key={children}
          aria-label={children}
        >
          {children.split(" ").map((word, wordI) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: "inline-block"
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto"
                  }} // Position elements
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {"\u00A0"}
            </div>
          ))}
        </StyledTitleElement>
      )}
    </AnimatePresence>
  );
};
