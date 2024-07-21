import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserContextProvider = ({ children }) => {
    const [username, setUsername] = useState();
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
