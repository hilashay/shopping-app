import { Form, Formik } from "formik";
import styled from "styled-components";
import { Button, SectionContainer } from "../../components/General.styled";
import PersonalDetails from "./PersonalDeatails/PersonalDeatails";
import Sizes from "./Sizes";
import TextArea from "./TextArea";
import { validate } from "./validate";

const DressMe = () => {
  return (
    <Container id="form-section">
      <Title>Dress me!</Title>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          adress: "",
          phone: "",
          budget: "",
          shirtSize: "",
          pantsSize: "",
          other: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          console.log("onSubmit");
          alert(JSON.stringify(values));
        }}
      >
        {(formik) => {
          return (
            <StyledForm>
              <PersonalDetails />
              <Sizes />
              <TextArea />
              <FormButton type="submit">Submit</FormButton>
            </StyledForm>
          );
        }}
      </Formik>
    </Container>
  );
};

export default DressMe;

const Container = styled(SectionContainer)`
  display: flex;
  padding-top: 100px;
  min-height: 100vh;
  background: #e5e5e5;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
`;

const Title = styled.h1`
  font-size: 39px;
  text-align: center;
  margin: 37px 0 26px;
`;

const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FormButton = styled(Button)`
  margin-left: 50px;
  height: 40px;
  width: 150px;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
