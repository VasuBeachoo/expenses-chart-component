import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Logo = styled.img.attrs({ src: logo, alt: "logo" })``;

export const BalanceAmt = styled.p``;

export const Heading = styled.p``;

export const Box = styled.div``;

export const BalanceBox = styled.div``;

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
