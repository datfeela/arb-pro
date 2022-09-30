import { useContext, useEffect } from "react";
import { Advantages } from "../components/Advantages/Advantages";
import { Offers } from "../components/Offers/Offers";
import { Stages } from "../components/Stages/Stages";
import { StrategyMeaning } from "../components/StrategyMeaning/StrategyMeaning";
import { CooperationOptions } from "../components/СooperationOptions/CooperationOptions";
import { AppContext } from "../context";
import { Tools } from "../components/Tools/Tools";
import { Cases } from "../components/Cases/Cases";
import { Feedback } from "../components/Feedback/Feedback";
import { About } from "../components/About/About";
import { Team } from "../components/Team/Team";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { QA } from "../components/QA/QA";
import { getStrategyHeader, getStrategyLayout } from "../api/api";
import { Header } from "../components/Header/Header";
import { Helmet } from "react-helmet";

export const Strategy = () => {
    const context = useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const headerResponse = await getStrategyHeader();
            const layoutResponse = await getStrategyLayout();
            context.dispatch({ type: "setStrategyLayout", data: layoutResponse });
            context.dispatch({ type: "setHeader", data: headerResponse });
        };
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Cтратегическое планирование</title>
                <meta name="description" content="Cтратегическое планирование" />
            </Helmet>
            {context.state.isHeaderLoaded === false && <div></div>}
            {context.state.isHeaderLoaded === true && <Header page="strategy" />}
            {context.state.isStrategyLayoutLoaded === false && <div></div>}
            {context.state.isStrategyLayoutLoaded === true && (
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
            )}
        </>
    );
};
