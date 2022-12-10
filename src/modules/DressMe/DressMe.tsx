import { Form, Formik, useFormik } from "formik";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Button, SectionContainer } from "../../components/General.styled";
import { initialValues } from "./initialValues";
import PersonalDetails from "./PersonalDeatails/PersonalDeatails";
import Sizes from "./UserSizeSelection";
import TextArea from "./TextArea";
import { validate } from "./validate";
import { NavHashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useFormDetails } from "../../providers/FormValuesContext";

const DressMe = () => {
  const navigate = useNavigate();
  const formDetails = useFormDetails();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container id="form-section">
      <Title>Dress me</Title>
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
                {/* <TextArea /> */}
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
  background: #e5e5e5;
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
`;
