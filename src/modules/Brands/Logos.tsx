import styled from "styled-components";

const importAll = (r: any) => {
  let images: any = {};
  r.keys().map((item: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};
const images = importAll(require.context("../../images/brands", false, /\.(png|jpe?g|svg)$/));
const logosNames = Object.keys(images);

const LogosList = () => {
  return (
    <Container>
      {logosNames.map((x: any) => (
        <ImageContainer>
          <Image src={images[x]}></Image>
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
