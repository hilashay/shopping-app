import styled from "styled-components";
import { SectionContainer } from "../../components/common/SectionContainer";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../providers/FormValuesContext";
import { changeFormatKeyValueToSuccessPage } from "../../Utils/utils";
import { Span } from "../../components/common/Span";

const SuccessPage = () => {
  const values = useContext<any>(MyContext);
  const keysAndValues: any = Object.entries(values.formValues);
  console.log("keysAndValues", keysAndValues);

  return (
    <MainContainer>
      <Container id="success-section">
        <FirstImg src="https://i.pinimg.com/564x/72/af/d2/72afd250f800e46193014bd698f10bd2.jpg"></FirstImg>
        <Title>
          <Span>Perfect!</Span> Ive got all I need
        </Title>
        <Content>
          <Details>
            {keysAndValues.map((x: any) => (
              <Field>
                <Label>{changeFormatKeyValueToSuccessPage(x?.[0])}: </Label>
                <Input>{changeFormatKeyValueToSuccessPage(x?.[1])}</Input>
              </Field>
            ))}
          </Details>
          <Img src="https://i.pinimg.com/564x/e4/0e/04/e40e04bf605a3d181d7f8919f995f616.jpg" />
        </Content>
      </Container>
    </MainContainer>
  );
};

export default SuccessPage;

const MainContainer = styled(SectionContainer)`
  display: flex;
  padding-top: 160px;
  margin-left: 200px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 160px 0 0 60px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 50%;
  padding: 80px 0 20px 160px;
  flex-direction: column;
  margin-left: 100px;
  background: rgba(245, 245, 245, 255);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
  @media (max-width: 768px) {
    padding: 25px 70px;
    margin-left: 0;
    width: 500px;
  }
  @media (max-width: 390px) {
    padding: 25px 70px 0 70px;
    margin-left: 0;
    width: 150px;
  }
`;

const FirstImg = styled.img`
  height: auto;
  width: 100px;
  border-radius: 50%;
  margin-left: 150px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    align-self: center;
    margin-left: 0;
    padding-top: 10px;
  }
`;

const Title = styled.h2`
  padding-bottom: 64px;
`;

const Img = styled.img`
  height: auto;
  width: 200px;
  border-radius: 50%;
  @media (max-width: 390px) {
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  // background: yellow;
  padding-bottom: 100px;
  flex-direction: row;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;
const Details = styled.p`
  display: flex;
  flex-direction: column;
  margin-right: 160px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;

const Field = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
const Label = styled.div`
  margin-right: 8px;
  font-size: 19px;
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;
const Input = styled.div`
  color: gray;
  font-size: 19px;
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;
