import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer id="Footer-section">
      <FirstColumnContatiner>
        <Title>Digiency</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget
          maecenas bibendum.
        </Text>
      </FirstColumnContatiner>
      <SecondColumnContatiner>
        <Title>Company</Title>
        <LinksContainer>
          <Link>About Us</Link>
          <Link>Our Work</Link>
          <Link>Client</Link>
          <Link>Our Blog</Link>
          <Link>Contact US</Link>
        </LinksContainer>
      </SecondColumnContatiner>
      <Copyright>
        <FooterText>Copyright 2021. All Right Reserved By Ojjomedia</FooterText>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #373737;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #ff5300;
  padding: 18px 0;
  width: 100%;
`;

const FirstColumnContatiner = styled.div`
  display: flex;
  width: 263px;
  flex-direction: column;
  color: #ffffff;
  padding: 66px 37px 60px 135px;
`;

const Title = styled.h1`
  fonst-size: 40px;
  margin-bottom: 25px;
`;

const FooterText = styled.h6`
  fonst-size: 16px;
  padding: 0 135px 0;
`;

const Text = styled.span`
  fonst-size: 16px;
`;

const SecondColumnContatiner = styled(FirstColumnContatiner)`
  padding: 66px 0 118px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  fonst-size: 16px;
`;
