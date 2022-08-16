import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Logo = styled.img.attrs({ src: logo, alt: "logo" })``;

export const BalanceAmt = styled.p``;

export const Heading = styled.p``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Balance = ({ className }) => {
  return (
    <BalanceBox className={className}>
      <Box>
        <Heading>My balance</Heading>
        <BalanceAmt>$921.48</BalanceAmt>
      </Box>
      <Logo />
    </BalanceBox>
  );
};

export default Balance;
