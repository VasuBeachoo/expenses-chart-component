import styled from "styled-components";

export const ExpensesTooltipLabel = styled.p`
  color: var(--Very-pale-orange);
  margin: 0;
`;

export const ExpensesTooltipBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--Dark-brown);
  padding: 0.25rem 0.5rem;
`;

const ExpensesTooltip = ({ className, active, payload }) => {
  return active ? (
    <ExpensesTooltipBox className={className}>
      <ExpensesTooltipLabel>${payload[0].value}</ExpensesTooltipLabel>
    </ExpensesTooltipBox>
  ) : (
    <></>
  );
};

export default ExpensesTooltip;
