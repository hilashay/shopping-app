import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const icons: Array<{ ImageUrl: string; alt: string; urlAdress: any }> = [
  {
    ImageUrl: "https://i.pinimg.com/564x/4a/94/77/4a9477bede69bbce3300e20588b28ebf.jpg",
    alt: "facebook",
    urlAdress: "https://www.facebook.com/hilashay",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/cd/da/26/cdda26fe0f0ef1638c394ead911ec6ad.jpg",
    alt: "instagram",
    urlAdress: "https://www.instagram.com/hilashay/",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/02/d3/7a/02d37aac4d77ea53165cb7c5f67521e4.jpg",
    alt: "linkedin",
    urlAdress: "https://www.linkedin.com/in/hilashay/",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/29/f7/5c/29f75cdb0cc4539f957c2b760a8e4906.jpg",
    alt: "whatsapp",
    urlAdress: "https://wa.me/+972526506130",
  },
];

const Icons = () => {
  const renderIcons = () =>
    icons.map(({ ImageUrl, alt, urlAdress }, index) => (
      <a href={urlAdress}>
        <Image key={index} src={ImageUrl} alt={alt} />
      </a>
    ));
  return <Container>{renderIcons()}</Container>;
};

export default Icons;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 37px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 27px;
`;
