import React, { createContext, useContext, useReducer, useState } from 'react'

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIRSTNAME':
            return { ...state, firstname: action.payload }
        case 'SET_LASTNAME':
            return { ...state, lastname: action.payload }
        default:
            return state;
    }
}

const UserContextProvider = ({ children }) => {
    const [username, setUsername] = useState();
    const [state, dispatch] = useReducer(reducer, {
        firstname: '',
        lastname: ''
    })
    return (
        <UserContext.Provider value={{ username, setUsername, ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
