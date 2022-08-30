import React,{ useState, createContext } from 'react'
const ClientContext = createContext();
export default ClientContext;

export const ClientContextProvider = ({ children }) => {
    const [clientDetails, setClientDetails] = useState({});
    const [items, setItems] = useState([]);

    return (
        <ClientContext.Provider value={{clientDetails, setClientDetails, items, setItems}}>
            {children}
        </ClientContext.Provider>
    )
}