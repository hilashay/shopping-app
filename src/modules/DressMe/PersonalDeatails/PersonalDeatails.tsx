import styled from "styled-components";
import FieldWithValidation from "./FieldWithValidation";
import { rangeProps } from "./rangeProps";

const PersonalDetails = () => {
  return (
    <Container>
      <SecondaryContainer>
        <FieldWithValidation placeholder="First Name" name="firstName" />
        <FieldWithValidation placeholder="Last Name" name="lastName" />
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldWithValidation placeholder="Email" name="email" />
        <FieldWithValidation placeholder="Adress" name="adress" />
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldWithValidation placeholder="Phone" name="phone" />
        <FieldWithValidation {...rangeProps} />
      </SecondaryContainer>
    </Container>
  );
};
export default PersonalDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  width: 530px;
  @media (max-width: 390px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
  }
`;
