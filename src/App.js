import axios from 'axios';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './assets/styled/global';
import { Layout } from './assets/styled/theme';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Offers } from './components/Offers/Offers';
import { Stages } from './components/Stages/Stages';
import { CooperationOptions } from './components/СooperationOptions/CooperationOptions';
import { AppContext } from './context';

function App() {
  const context = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get('https://arb-pro.ru/events/strategic_planning/strategy-layout-data.json')
      const responsePage = await axios.get('data/strat-plan-layout-data.json');
      const responseMainLayout = await axios.get('data/main-layout-data.json');
      let data = { ...responsePage.data, ...responseMainLayout.data }
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
            <Offers/>
            <CooperationOptions />
            <PH/>
            <Stages />
          </Main>
          <Footer/>
        </>}
      </div>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;

const PH = styled.div`
  height: 400px;
  width: 100%;
`

const Main = styled.main`
  margin-top: ${Layout.headerHeight};

  @media (max-width: 1120px) {
      margin-top: ${Layout.headerHeight1120};
  }

  @media (max-width: 768px) {
      margin-top: ${Layout.headerHeight768};
  }

  @media (max-width: 480px) {
      margin-top: ${Layout.headerHeight480};
  }
`


