import styled from "styled-components";
import { pantsSizes, shirtSizes } from "./sizeOptions";

const UserSizeSelection = () => {
  const createOptionElement = ({ value, label }: any) => <option value={value} label={label} />;
  return (
    <Container>
      <Select name="shirtsize">
        <option value="" label="Pick your shirt size">
          Select a color
        </option>
        {shirtSizes.map(createOptionElement)}
      </Select>
      <Select name="pantssize">
        <option value="" label="Pick your Pants size">
          Select a color
        </option>
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
