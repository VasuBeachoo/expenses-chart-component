import styled from "styled-components";
import Balance from "./Balance";
import Report from "./Report";

export const ExpensesChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: clamp(15rem, 90vw, 35rem);
  margin: 3.5rem;
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
