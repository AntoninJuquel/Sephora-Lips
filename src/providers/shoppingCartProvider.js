import React from 'react';

const shoppingCart = { items: [], total: 0, delivery: {} }

const shoppingCartContext = React.createContext(shoppingCart);
const dispatchShoppingCartContext = React.createContext(undefined);

export const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        shoppingCart
    );
    return (
        <shoppingCartContext.Provider value={state}>
            <dispatchShoppingCartContext.Provider value={dispatch}>
                {children}
            </dispatchShoppingCartContext.Provider>
        </shoppingCartContext.Provider>
    );
};

export const shoppingCartState = () => [
    React.useContext(shoppingCartContext),
    React.useContext(dispatchShoppingCartContext)
];

export const updatePrice = (s) => {
    let total = 0
    s.items.forEach(element => {
        total += (element.price * element.quantity)
    });
    total += (s.delivery.price === undefined ? 0 : s.delivery.price)
    return total
}