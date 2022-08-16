import styled from "styled-components";
import { mixinBlock } from "../mixins";
import logo from "../assets/logo.svg";

export const Logo = styled.img.attrs({ src: logo, alt: "logo" })``;

export const BalanceAmt = styled.p`
  color: var(--Cream);
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
`;

export const Label = styled.p`
  color: var(--Cream);
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const BalanceBox = styled.div`
  ${mixinBlock}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--Soft-red);
`;

const Balance = ({ className }) => {
  return (
    <BalanceBox className={className}>
      <Box>
        <Label>My balance</Label>
        <BalanceAmt>$921.48</BalanceAmt>
      </Box>
      <Logo />
    </BalanceBox>
  );
};

export default Balance;
