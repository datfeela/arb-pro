import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { getInvincibilityHeader, getInvincibilityLayout } from "../api/api";
import { Header } from "../components/Header/Header";
import { HeaderInvincibility } from "../components/HeaderInvincibility/HeaderInvincibility";
import { FeedbackInvincibility } from "../components/FeedbackInvincibility/FeedbackInvincibility";
import { Sharing } from "../components/Sharing/Sharing";
import { TrainingPlan } from "../components/TrainingPlan/TrainingPlan";
import { Helmet } from "react-helmet";

export const Invincibility = () => {
    const context = useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const headerResponse = await getInvincibilityHeader();
            const layoutResponse = await getInvincibilityLayout();
            context.dispatch({ type: "setInvincibilityLayout", data: layoutResponse });
            context.dispatch({ type: "setHeader", data: headerResponse });
        };
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Несокрушимость 3.0</title>
                <meta name="description" content="Несокрушимость 3.0" />
            </Helmet>
            {context.state.isHeaderLoaded === false && <div></div>}
            {context.state.isHeaderLoaded === true && <Header page="invincibility" />}
            {context.state.isInvincibilityLayoutLoaded === false && <div></div>}
            {context.state.isInvincibilityLayoutLoaded === true && (
                <main>
                    <HeaderInvincibility />
                    {/* <FeedbackInvincibility /> */}
                    <Sharing />
                    <TrainingPlan />
                </main>
            )}
        </>
    );
};
