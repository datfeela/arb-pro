import axios from 'axios';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './assets/styled/global';
import { Layout } from './assets/styled/theme';
import { Header } from './components/Header/Header';
import { Stages } from './components/Stages/Stages';
import { AppContext } from './context';
// import data from "./strategy-layout-data.json";

function App() {
  const context = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://arb-pro.ru/events/strategic_planning/strategy-layout-data.json')
      let data = response.data;
      debugger;
      context.setState({ ...data, loaded: true })
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="App">
        {context.state.loaded === false && <div></div>}
        {context.state.loaded === true && <>
          <Header />
          <Main>
            <Stages />
          </Main>
        </>}
      </div>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;

const Main = styled.main`
  margin-top: ${Layout.headerHeight};
`


