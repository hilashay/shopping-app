import styled from "styled-components";
import { SectionContainer, Button } from "../../components/General.styled";
import { Field, Formik, useFormik, Form } from "formik";
import { validate } from "./validate";
import PersonalDetails from "./PersonalDeatails";
import Sizes from "./Sizes";
import TextArea from "./TextArea";

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
              {/* <Sizes />
            <TextArea /> */}
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
  position: relative;
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
`;

const FormButton = styled(Button)`
  margin-left: 50px;
  height: 40px;
  width: 150px;
  font-size: 15px;
  position: absolute;
  bottom: 386px;
  right: 616px;
`;
