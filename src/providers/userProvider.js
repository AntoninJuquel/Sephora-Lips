import React from 'react';

const user = {
    firstName: '',
    lastName: '',
    social: '',
    imgUrl: '',
    fidelity: '',
    admin: ''
}

const userContext = React.createContext(user);
const dispatchUserContext = React.createContext(undefined);
export const UserProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        user
    );
    return (
        <userContext.Provider value={state}>
            <dispatchUserContext.Provider value={dispatch}>
                {children}
            </dispatchUserContext.Provider>
        </userContext.Provider>
    );
};
export const userState = () => [
    React.useContext(userContext),
    React.useContext(dispatchUserContext)
];