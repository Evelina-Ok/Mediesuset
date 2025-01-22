import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState();


    // If user data is there, set user data into session storage
    useEffect(() => {
        if(userData?.access_token){
        sessionStorage.setItem('userData', JSON.stringify(userData))
    }
    }, [userData])

    // Når komponentet mounter, check om userData findes som state, vis ikke
    // Så tjek om userData findes i sessionStorage, hvis ja, såsæt vores state
    // til indholdet i sessionStorage
    useEffect(() => {
        if(!userData) {
            if(sessionStorage.getItem('userData')) {
                setUserData(JSON.parse(sessionStorage.getItem('userData')))
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}