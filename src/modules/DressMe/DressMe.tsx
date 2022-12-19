import { Form, Formik, useFormik } from "formik";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../components/common/Button";
import { SectionContainer } from "../../components/common/SectionContainer";
import { initialValues } from "./initialValues";
import PersonalDetails from "./PersonalDeatails/PersonalDeatails";
import Sizes from "./UserSizeSelection";
import TextArea from "./TextArea";
import { validate } from "./validate";
import { useNavigate } from "react-router-dom";
import { useFormDetails } from "../../providers/FormValuesContext";
import { GRAYBACKGROUND } from "../../components/Colors";

const DressMe = () => {
  const navigate = useNavigate();
  const formDetails = useFormDetails();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container id="form-section">
      <Title>Dress me</Title>
      <SeconderyTitle>Tell me what you like, I’ll find what you love</SeconderyTitle>
      <Formik
        initialValues={initialValues}
        // validate={validate}
        enableReinitialize={true}
        onSubmit={(values) => {
          formDetails.setFormValues(values);
          alert(JSON.stringify(values));
          navigate("/success-section");
        }}
      >
        {(formik) => {
          console.log("formik", formik.values);

          return (
            <FormContainer>
              <StyledForm>
                <PersonalDetails />
                <Sizes />
                <TextArea />
                <FormButton type="submit">Submit</FormButton>
              </StyledForm>
            </FormContainer>
          );
        }}
      </Formik>
    </Container>
  );
};

export default DressMe;

const Container = styled(SectionContainer)`
  display: flex;
  padding: 100px 0 100px;
  background: ${GRAYBACKGROUND};
  flex-direction: column;
  align-items: center;
  margin-bottom: -83px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
`;

const FormContainer = styled.div`
  diaplay: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 39px;
  text-align: center;
  margin: 37px 0 26px;
  letter-spacing: 1px;
`;

const SeconderyTitle = styled.h2`
  // font-size: 39px;
  text-align: center;
  margin: 20px 0 26px;
  letter-spacing: 1px;
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
  align-self: end;
  bottom: -80px;
`;
