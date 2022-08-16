import styled from "styled-components";
import Balance from "./Balance";
import Report from "./Report";

export const ExpensesChartContainer = styled.div``;

const ExpensesChart = ({ className }) => {
  return (
    <ExpensesChartContainer className={className}>
      <Balance />
      <Report />
    </ExpensesChartContainer>
  );
};

export default ExpensesChart;
