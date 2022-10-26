import { createContext, useReducer } from "react";

const defaultState = {
    isFooterLoaded: false,
    isHeaderLoaded: false,
    isStrategyLayoutLoaded: false,
    isInvincibilityLayoutLoaded: false,
    isbasicStrategiesRecordsSaleLayoutLoaded: false,
    layouts: {
        header: null,
        footer: null,
        strategy: null,
        invincibility: null,
        basicStrategiesRecordsSale: null
    }
};

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'setFooter':
            return { ...state, layouts: { ...state.layouts, footer: action.data }, isFooterLoaded: true };
        case 'setHeader':
            return { ...state, layouts: { ...state.layouts, header: action.data }, isHeaderLoaded: true };
        case 'setStrategyLayout':
            return { ...state, layouts: { ...state.layouts, strategy: action.data }, isStrategyLayoutLoaded: true };
        case 'setInvincibilityLayout':
            return { ...state, layouts: { ...state.layouts, invincibility: action.data }, isInvincibilityLayoutLoaded: true };
        case 'setBasicStrategiesRecordsSale':
            return { ...state, layouts: { ...state.layouts, basicStrategiesRecordsSale: action.data }, isbasicStrategiesRecordsSaleLayoutLoaded: true }
        default:
            throw new Error('wrong action type');
    }
}

export const AppContext = createContext(defaultState);

const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(stateReducer, defaultState);

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
