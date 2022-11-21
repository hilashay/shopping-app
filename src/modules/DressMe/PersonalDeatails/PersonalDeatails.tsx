import styled from "styled-components";
import FieldAndValidation from "./FieldAndValidation";
// @ts-ignore
const PersonalDetails = () => {
  const rangeProps = {
    type: "number",
    min: "300",
    max: "10000",
    placeholder: "Budget",
    name: "budget",
    step: "100",
  };

  return (
    <Container>
      <SecondaryContainer>
        <FieldAndValidation placeholder="First Name" name="firstName" />
        <FieldAndValidation placeholder="Last Name" name="lastName" />
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldAndValidation placeholder="Email" name="email" />
        <FieldAndValidation placeholder="Adress" name="adress" />
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldAndValidation placeholder="Phone" name="phone" />
        <FieldAndValidation {...rangeProps} />
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
`;
