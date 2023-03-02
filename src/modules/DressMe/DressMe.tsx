import { Form, Formik, useFormik } from "formik";
import { useEffect } from "react";
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
  // console.log("formDetails in dressme page", formDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const request = async () => {
  //     // const res = await fetch("https://www.google.com");
  //     const res = await fetch("http://localhost:3000");
  //     console.log("res1", res);
  //   };

  //   request();
  // }, []);

  return (
    <Container id="form-section">
      <Title>Dress me</Title>
      <SeconderyTitle>Tell me what you like, I’ll find what you love</SeconderyTitle>
      <Formik
        initialValues={initialValues}
        // validate={validate}
        enableReinitialize={true}
        onSubmit={async (values) => {
          formDetails.setFormValues(values);
          alert(JSON.stringify(values));
          try {
            console.log("here");
            const res = await fetch("http://localhost:3000/form-section", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...values,
              }),
            });
            console.log("res", res);

            const body = await res.json();
            console.log("body ", body);
            navigate("/success-section");
          } catch (error) {
            console.log("Error:", error);
            // setIsError(true);
          }
          // navigate("/success-section");
        }}
      >
        {(formik) => {
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
    padding: 40px 40px;
  }
  @media (max-width: 390px) {
    padding: 140px 40px;
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
  text-align: center;
  margin: 0 0 26px;
  letter-spacing: 1px;
  color: #447c99;
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
  @media (max-width: 390px) {
    margin-right: 28px;
  }
`;
