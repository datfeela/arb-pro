import "./App.scss";
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Advantages } from './components/Advantages/Advantages';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Offers } from './components/Offers/Offers';
import { Stages } from './components/Stages/Stages';
import { StrategyMeaning } from './components/StrategyMeaning/StrategyMeaning';
import { CooperationOptions } from './components/СooperationOptions/CooperationOptions';
import { AppContext } from './context';
import { Tools } from "./components/Tools/Tools";
import { Cases } from "./components/Cases/Cases";
import { Feedback } from "./components/Feedback/Feedback";
import { About } from "./components/About/About";
import { Team } from "./components/Team/Team";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { QA } from "./components/QA/QA";

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
          <main>
            <Offers />
            <CooperationOptions />
            <StrategyMeaning />
            <Advantages />
            <Tools />
            <Cases />
            <Stages />
            <Feedback />
            <About />
            <Team />
            <ContactUs />
            <QA />
          </main>
          <Footer />
        </>}
      </div>
    </>
  );
}

export default App;