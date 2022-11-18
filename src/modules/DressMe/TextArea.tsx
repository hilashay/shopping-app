import styled from "styled-components";
import { Field, Formik, useFormik } from "formik";
import { validate } from "./validate";

const TextArea = () => {
  return (
    <Container>
      <Text placeholder="There's something you want to shere with me? Something you like to wear/never wear? (color, skinny, loose, etc..)"></Text>
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 530px;
`;

const Text = styled.textarea`
  margin-top: 18px;
  width: 100%;
  height: 130px;
  border: 1px solid;
  border-color: white;
  color: gray;
  font-family: "Gambetta", serif;
  font-size: 14px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
`;
