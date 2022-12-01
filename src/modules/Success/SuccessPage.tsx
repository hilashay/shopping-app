import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import { useContext } from "react";
import { MyContext } from "../DressMe/DressMe";

const SuccessPage = () => {
  return (
    <Container id="success-section">
      <p>Grate! Ive got all I need</p>
    </Container>
  );
};

export default SuccessPage;

const Container = styled(SectionContainer)`
  display: flex;
  min-height: 100vh;
  padding: 100px 0 100px;
  //   background-color: red;
  // flex-direction: column;
  align-items: center;
  margin-bottom: -83px;
`;
