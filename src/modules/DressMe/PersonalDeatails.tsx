import { Field, Formik, useField, useFormik, FormikProps } from "formik";
import styled from "styled-components";
import { useEffect } from "react";

const PersonalDetails = ({ ...props }) => {
  console.log("props", props);
  const [field, meta, helpers] = useField("email");
  console.log("field ", field.value);
  console.log("meta ", meta);
  console.log("helpers ", helpers);
  //   useEffect(() => {
  //     if (field.value.includes("@")) {
  //       helpers.setValue("asdasdada");
  //       helpers.setError("asdasdada");
  //     }
  //   }, [field.value]);

  return (
    <Container>
      <SecondaryContainer>
        <FieldContainer>
          <PersonalField placeholder="First Name" name="firstName" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
        <FieldContainer>
          <PersonalField placeholder="Last Name" name="lastName" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldContainer>
          <PersonalField placeholder="Email" name="email" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
        <FieldContainer>
          <PersonalField placeholder="Adress" name="adress" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
      </SecondaryContainer>
      <SecondaryContainer>
        <FieldContainer>
          <PersonalField placeholder="Phone" name="phone" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
        <FieldContainer>
          <PersonalField type="select" placeholder="budget" name="select" />
          {meta.error ? <Invalid>{meta.error}</Invalid> : null}
        </FieldContainer>
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

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Invalid = styled.span`
  font-size: 12px;
  color: gray;
`;

const PersonalField = styled(Field)`
  height: 40px;
  width: 250px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: white;
  font-family: "Gambetta", serif;
  font-size: 14px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
`;
