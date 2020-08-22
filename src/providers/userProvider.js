import React from 'react';

const user = {
    firstName: 'Antonin',
    lastName: 'Juquel',
    social: '@antoninjuquel',
    imgUrl: 'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116153414_2990438971067204_9013355836731407937_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_ohc=ykuPxlPBwJoAX-msLhv&oh=c465ff2223bd3939771c89ede51c6f7b&oe=5F613B42',
    fidelity: 15
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