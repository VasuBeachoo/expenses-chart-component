import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ExpensesChart from "./components/ExpensesChart";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <ExpensesChart />
    </AppContainer>
  );
};

export default App;
