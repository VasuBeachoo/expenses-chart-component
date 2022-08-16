import styled from "styled-components";
import Balance from "./Balance";
import Report from "./Report";

export const ExpensesChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`;

const ExpensesChart = ({ className }) => {
  return (
    <ExpensesChartContainer className={className}>
      <Balance />
      <Report />
    </ExpensesChartContainer>
  );
};

export default ExpensesChart;
