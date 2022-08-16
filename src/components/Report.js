import styled from "styled-components";

export const MonthlyLabel = styled.p``;

export const MonthlyNet = styled.p``;

export const MonthlyBox = styled.div``;

export const TotalAmt = styled.h1``;

export const TotalLabel = styled.p``;

export const TotalBox = styled.div``;

export const Box = styled.div``;

export const Divider = styled.hr``;

export const Heading = styled.h1``;

export const ReportBox = styled.div``;

const Report = ({ className }) => {
  return (
    <ReportBox className={className}>
      <Heading>Spending - Last 7 days</Heading>
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
