import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { getBasicStrategiesRecordsSaleHeader, getBasicStrategiesRecordsSaleLayout, getFooter } from "../api/api";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { BannerBasicStrategies } from "../components/BannerBasicStrategies/BannerBasicStrategies";
import { VideosBasicStrategies } from "../components/VideosBasicStrategies/VideosBasicStrategies";
import { PresentationsBasicStrategiesimport } from "../components/PresentationsBasicStrategies/PresentationsBasicStrategies";

export const BasicStrategiesRecordsSale = () => {
    const context = useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const headerPromise = getBasicStrategiesRecordsSaleHeader();
            const layoutPromise = getBasicStrategiesRecordsSaleLayout();
            const footerPromise = getFooter();
            Promise.all([headerPromise, layoutPromise, footerPromise]).then(([headerResponse, layoutResponse, footerResponse]) => {
                context.dispatch({ type: "setBasicStrategiesRecordsSale", data: layoutResponse });
                context.dispatch({ type: "setHeader", data: headerResponse });
                context.dispatch({ type: "setFooter", data: footerResponse });
            });
        };
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Базовые стратегии</title>
                <meta name="description" content="Базовые стратегии" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
            </Helmet>
            {context.state.isHeaderLoaded === true && <Header page="basicStrategies" />}
            {context.state.isbasicStrategiesRecordsSaleLayoutLoaded === false && <div></div>}
            {context.state.isbasicStrategiesRecordsSaleLayoutLoaded === true && (
                <main id="basic">
                    <BannerBasicStrategies />
                    <VideosBasicStrategies />
                    <PresentationsBasicStrategiesimport />
                </main>
            )}
            {context.state.isFooterLoaded === true && <Footer secondaryColor="pink" />}
        </>
    );
};
