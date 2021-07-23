import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const Container = styled(motion.div)`
  background-color: white;
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  //scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x: hidden;
  height: 90%;
`;

export const SectionContainer = styled(motion.div)`
  padding: 0 0.5em;
  background-color: transparent;
  scroll-snap-type: y mandatory;
  width: 100wh;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ContentContainer = styled(motion.div)`
  border-radius: 25px;
  background-color: transparent;
  height: 100%;
  @media (min-width: 768px) {
    padding: 1em 0;
  }
`;

export const ContactWrapper = styled(motion.div)`
  color: black;
  font-size: 1em;
  margin: 0;
  text-align: right;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0;
  @media (min-width: 320px) {
    font-size: 1.5em;
  }
  @media (min-width: 360px) {
    font-size: 1.7em;
  }

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const Message = styled(motion.div)`
  color: black;
  font-size: 2em;
  margin-right: 2rem;

  @media (min-width: 320px) {
    font-size: 2em;
  }
  @media (min-width: 360px) {
    font-size: 2.4em;
  }
  @media (min-width: 376px) {
    font-size: 2.5em;
  }

  @media (min-width: 768px) {
    font-size: 3.5em;
  }
  @media (min-width: 1025px) {
    font-size: 5em;
  }
`;

export const Button = styled(motion.button)`
  text-align: left;
  overflow-x: auto;
`;
export const SectionTitle = styled(motion.div)`
  color: black;
  font-size: 1.9em;
  margin-bottom: 1rem;
  @media (min-width: 320px) {
    font-size: 1.8em;
  }
  @media (min-width: 360px) {
    font-size: 2.5em;
  }
  @media (min-width: 481px) {
    font-size: 2.5em;
  }

  @media (min-width: 768px) {
    font-size: 3.5em;
  }
  @media (min-width: 1025px) {
    font-size: 4em;
  }
`;

export const RowContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    //flex-direction: row;
  }
`;
export const ProfileName = styled(motion.div)`
  text-align: center;
  font-size: 0.5em;
`;

export const LeftContainer = styled(motion.div)`
  margin: auto;

  @media (min-width: 1025px) {
    width: 20rem;
  }
`;

export const RightContainer = styled(motion.div)`
  color: black;
  font-size: 1em;

  @media (min-width: 321px) {
    font-size: 2em;
  }

  @media (min-width: 481px) {
    font-size: 3.5em;
  }

  @media (min-width: 768px) {
    font-size: 3.5em;
  }
  @media (min-width: 1025px) {
    font-size: 5em;
  }
`;

export const Image = styled(motion.img)`
  object-fit: cover;
  height: 15rem;
  width: auto;
  margin: auto;
`;
