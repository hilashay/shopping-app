import { Field, useField } from "formik";
import styled from "styled-components";

export interface FieldProps {
  placeholder: string;
  name: string;
  type?: string;
  min?: string;
  max?: string;
  step?: string;
}

const FieldAndValidation = ({ min, max, step, type, placeholder, name }: FieldProps) => {
  const [Field, Meta] = useField(name);
  return (
    <FieldContainer>
      <PersonalField
        min={min}
        max={max}
        step={step}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {Meta.error ? <Invalid>{Meta.error}</Invalid> : null}
    </FieldContainer>
  );
};

export default FieldAndValidation;

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
