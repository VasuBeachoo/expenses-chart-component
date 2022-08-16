import styled from "styled-components";

export const MonthlyLabel = styled.p``;

export const MonthlyNet = styled.p``;

export const MonthlyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const TotalAmt = styled.h1``;

export const TotalLabel = styled.p``;

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Divider = styled.hr`
  width: 100%;
`;

export const Heading = styled.h1``;

export const ReportBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

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
