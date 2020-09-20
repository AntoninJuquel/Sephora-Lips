import React from 'react';
import Items from '../utils/Items';

const shops = {
    shops: Items.shops
}

const shopsContext = React.createContext(shops);
const dispatchShopsContext = React.createContext(undefined);
export const ShopsProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        shops
    );
    return (
        <shopsContext.Provider value={state}>
            <dispatchShopsContext.Provider value={dispatch}>
                {children}
            </dispatchShopsContext.Provider>
        </shopsContext.Provider>
    );
};
export const shopsState = () => [
    React.useContext(shopsContext),
    React.useContext(dispatchShopsContext)
];