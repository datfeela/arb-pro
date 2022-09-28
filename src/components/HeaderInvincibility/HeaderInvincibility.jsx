import { useContext } from "react";
import { AppContext } from "../../context";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { HeaderBot } from "./HeaderBot/HeaderBot";

export const HeaderInvincibility = () => {
    const data = useContext(AppContext).state.layouts.invincibility.header;

    return (
        <>
            <HeaderTop data={data.top} />
            <HeaderBot data={data.bottom} />
        </>
    );
};
