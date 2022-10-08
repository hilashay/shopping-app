import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";

const Review = () => {
  return (
    <div>
      <Card></Card>
    </div>
  );
};

export default Review;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 270px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
