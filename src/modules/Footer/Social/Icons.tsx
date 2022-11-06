import styled from "styled-components";

const icons: Array<{ ImageUrl: string; alt: string }> = [
  {
    ImageUrl: "https://i.pinimg.com/564x/4a/94/77/4a9477bede69bbce3300e20588b28ebf.jpg",
    alt: "facebook",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/cd/da/26/cdda26fe0f0ef1638c394ead911ec6ad.jpg",
    alt: "instagram",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/f5/43/b4/f543b409534502619dd22f2611508325.jpg",
    alt: "twitter",
  },
  {
    ImageUrl: "https://i.pinimg.com/564x/29/f7/5c/29f75cdb0cc4539f957c2b760a8e4906.jpg",
    alt: "whatsapp",
  },
];

const Icons = () => {
  const renderIcons = () => icons.map(({ ImageUrl, alt }) => <Image src={ImageUrl} alt={alt} />);
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
