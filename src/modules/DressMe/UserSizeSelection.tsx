import styled from "styled-components";
import { pantsSizes, shirtSizes } from "./sizeOptions";
import { Field, useField } from "formik";

const UserSizeSelection = () => {
  const createOptionElement = ({ value, label }: any) => <option value={value} label={label} />;
  const [value, meta, shirtSizeHelpers] = useField("shirtSize");
  const [value2, meta2, pantsSizeHelpers] = useField("pantsSize");

  return (
    <Container>
      <Select
        // name="shirtSize"
        onChange={(e: any) => {
          shirtSizeHelpers.setValue(e.target.value);
        }}
      >
        {shirtSizes.map(createOptionElement)}
      </Select>
      <Select
        // name="pantsSize"
        onChange={(e: any) => {
          pantsSizeHelpers.setValue(e.target.value);
        }}
      >
        {pantsSizes.map(createOptionElement)}
      </Select>
    </Container>
  );
};

export default UserSizeSelection;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 530px;
`;

const Select = styled.select`
  display: block;
  color: gray;
  height: 45px;
  width: 255px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
`;

function setFieldValue(arg0: string, value: any): void {
  throw new Error("Function not implemented.");
}
