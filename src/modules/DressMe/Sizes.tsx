import styled from "styled-components";
import { Field, Formik, useFormik } from "formik";
import { validate } from "./validate";

const Sizes = () => {
  return (
    <Container>
      <Select name="shirtsize" style={{ display: "block" }}>
        <option value="" label="Pick your shirt size">
          Select a color
        </option>
        <option value="xs" label="xs">
          XS
        </option>
        <option value="s" label="s">
          S
        </option>

        <option value="m" label="m">
          M
        </option>
        <option value="l" label="l">
          L
        </option>
        <option value="xl" label="xl">
          XL
        </option>
      </Select>
      <Select name="pantssize" style={{ display: "block" }}>
        <option value="" label="Pick your Pants size">
          Select a color
        </option>
        <option value="32" label="32">
          32
        </option>
        <option value="34" label="34">
          34
        </option>

        <option value="36" label="36">
          36
        </option>
        <option value="38" label="38">
          38
        </option>
        <option value="40" label="40">
          40
        </option>
        <option value="42" label="42">
          42
        </option>
      </Select>
    </Container>
  );
};

export default Sizes;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 530px;
`;

const Select = styled.select`
  color: gray;
  height: 45px;
  width: 255px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
`;
