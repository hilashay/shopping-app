import styled from "styled-components";
import { BLUEFONTCOLOR } from "../components/Colors";

export const SectionContainer = styled.div`
  display: flex;
  padding: 0px 135px;
`;

export const Button = styled.button`
  height: 40px;
  width: 130px;
  font-size: 20px;
  background-color: ${BLUEFONTCOLOR};
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  position: absolute;
  bottom: 300px;
  font-family: "Dosis", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Span = styled.span`
  color: ${BLUEFONTCOLOR};
`;
