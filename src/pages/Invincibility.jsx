import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { getFooter, getInvincibilityHeader, getInvincibilityLayout } from "../api/api";
import { Header } from "../components/Header/Header";
import { HeaderInvincibility } from "../components/HeaderInvincibility/HeaderInvincibility";
import { FeedbackInvincibility } from "../components/FeedbackInvincibility/FeedbackInvincibility";
import { Sharing } from "../components/Sharing/Sharing";
import { TrainingPlan } from "../components/TrainingPlan/TrainingPlan";
import { Helmet } from "react-helmet";
import { Goal } from "../components/Goal/Goal";
import { Topics } from "../components/Topics/Topics";
import { Materials } from "../components/Materials/Materials";
import { Clients } from "../components/Clients/Clients";
import { ScheduleSessions } from "../components/ScheduleSessions/ScheduleSessions";
import { TeamInvincibility } from "../components/TeamInvincibility/TeamInvincibility";
import { InvocationForm } from "../components/InvocationForm/InvocationForm";
import { Footer } from "../components/Footer/Footer";
import { ScheduleWebinarsInvincibility } from "../components/ScheduleWebinarsInvincibility/ScheduleWebinarsInvincibility";
import { useAnchorsScroll } from "../hooks/useAnchorsScroll";

export const Invincibility = () => {
    const context = useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const headerPromise = getInvincibilityHeader();
            const layoutPromise = getInvincibilityLayout();
            const footerPromise = getFooter();
            Promise.all([headerPromise, layoutPromise, footerPromise]).then(([headerResponse, layoutResponse, footerResponse]) => {
                context.dispatch({ type: "setInvincibilityLayout", data: layoutResponse });
                context.dispatch({ type: "setHeader", data: headerResponse });
                context.dispatch({ type: "setFooter", data: footerResponse });
            });
        };
        fetchData();
    }, []);
    
    useAnchorsScroll()

    return (
        <>
            <Helmet>
                <title>Несокрушимость 3.0</title>
                <meta name="description" content="Несокрушимость 3.0" />
            </Helmet>
            {context.state.isHeaderLoaded === true && <Header page="invincibility" />}
            {context.state.isInvincibilityLayoutLoaded === false && <div></div>}
            {context.state.isInvincibilityLayoutLoaded === true && (
                <main>
                    <HeaderInvincibility />
                    <FeedbackInvincibility />
                    <ScheduleWebinarsInvincibility/>
                    <Sharing />
                    <TrainingPlan />
                    <Goal />
                    <Topics />
                    <Materials />
                    <Clients />
                    <ScheduleSessions />
                    <TeamInvincibility />
                    <InvocationForm />
                </main>
            )}
            {context.state.isFooterLoaded === true && <Footer />}
        </>
    );
};
