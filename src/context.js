import { createContext, useState } from "react";

const defaultState = {
    loaded: false,
    state: null
};

export const AppContext = createContext(defaultState);

const ContextProvider = (props) => {
    const [state, setState] = useState(defaultState);

    return (
        <AppContext.Provider
            value={{
                state,
                setState
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
