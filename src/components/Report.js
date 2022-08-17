import styled from "styled-components";
import { mixinBlock, mixinHeading, mixinText } from "../mixins";
import ExpensesBarChart from "./ExpensesBarChart";

export const MonthlyLabel = styled.p`
  ${mixinText}
  margin: 0;
`;

export const MonthlyNet = styled.p`
  ${mixinHeading}
  font-size: 1.25rem;
  margin: 0;
`;

export const MonthlyBox = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
`;

export const TotalAmt = styled.h1`
  ${mixinHeading}
  font-size: clamp(2rem, 5vw, 2.25rem);
  margin: 0;
`;

export const TotalLabel = styled.p`
  ${mixinText}
  margin: 0;
`;

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const Divider = styled.hr`
  width: 100%;
  opacity: 0.3;
  margin: 1.25rem 0 1.65rem;
`;

export const Heading = styled.h1`
  ${mixinHeading}
  font-size: clamp(1.15rem, 5vw, 1.75rem);
  margin: 0;
`;

export const ReportBox = styled.div`
  ${mixinBlock}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: var(--Very-pale-orange);
`;

const Report = ({ className }) => {
  return (
    <ReportBox className={className}>
      <Heading>Spending - Last 7 days</Heading>
      <ExpensesBarChart />
      <Divider />
      <Box>
        <TotalBox>
          <TotalLabel>Total this month</TotalLabel>
          <TotalAmt>$478.33</TotalAmt>
        </TotalBox>
        <MonthlyBox>
          <MonthlyNet>+2.4%</MonthlyNet>
          <MonthlyLabel>from last month</MonthlyLabel>
        </MonthlyBox>
      </Box>
    </ReportBox>
  );
};

export default Report;
