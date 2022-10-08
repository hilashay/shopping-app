import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Carousel from "better-react-carousel";

// const Reviews = () => {
//   return (
//     <div style={{ height: 540 }} id="reviews-section">
//       <SectionContainer>
//         <H1>Reviews</H1>
//         <Card>
//           <ImgCard
//             src={"https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg"}
//           ></ImgCard>
//           <Title>Send me your details</Title>
//           <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
//         </Card>
//         <Card>
//           <ImgCard
//             src={"https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg"}
//           ></ImgCard>
//           <Title>Send me your details</Title>
//           <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
//         </Card>

//         <Card>
//           <ImgCard
//             src={"https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg"}
//           ></ImgCard>
//           <Title>Send me your details</Title>
//           <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
//         </Card>
//       </SectionContainer>
//     </div>
//   );
// };

// export default Reviews;

const H1 = styled.h1`
  text-align: center;
`;

// const CardsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   background-color: red;
//   width: 470px;
// `;

const CarouselItem = styled(Carousel.Item)`
  width: 600px;
  background: yellow;
`;

const Card = styled.div`
  position: relative;
  height: 250px;
  width: 300px;
  background-color: #ff5300;
  //   justify-content: space-around;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: 65px;
`;

const Span = styled.div`
  color: white;
  font-size: 15px;
  margin-bottom: 50px;
  margin-left: 65px;
`;

const ImgCard = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  left: -30px;
  top: 20px;
`;
