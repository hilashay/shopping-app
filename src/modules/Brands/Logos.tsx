import styled from "styled-components";

const importAll = (r: any) => {
  console.log("r.keys", r.keys());
  let images: any = {};
  r.keys().map((item: any) => {
    images[item.replace("./", "")] = r(item);
    console.log("images inside:", images);
  });
  return images;
};
const images = importAll(require.context("../../images/brands", false, /\.(png|jpe?g|svg)$/));
console.log("images", images);
const logosNames = Object.keys(images);

const LogosList = () => {
  return (
    <Container>
      {logosNames.map((logo: any) => (
        <ImageContainer>
          <Image src={images[logo]}></Image>
        </ImageContainer>
      ))}
    </Container>
  );
};

export default LogosList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: auto;
  background: white;
`;
const Image = styled.img`
  padding: 30px 10px;
  width: 100px;
  height: auto;
`;
